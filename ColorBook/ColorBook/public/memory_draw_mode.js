console.log('Script running');
//Wait till all content is loaded, could be external fonts scripts from other servers etc....
if (document.readyState != 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');
  colorCamera();
  appendColors();
  setTimeout(drawingGiraffeWhite, 5000);
  document.getElementById("continueId").addEventListener("click", changeIMG);
}
var svgArray = ["giraffePaint", "fishpaint"];

//Giraffe Colored drawing
var giraffeArray = ["sun", "birds", "bush", "tree", "sky", "giraffes", "clouds"];
var sun = document.getElementsByClassName("cls-1sun");
var birds = document.getElementsByClassName("cls-1birds");
var bush = document.getElementsByClassName("cls-1bush");
var tree = document.getElementsByClassName("cls-1tree");
var sky = document.getElementsByClassName("cls-1sky");
var giraffes = document.getElementsByClassName("cls-1giraffes");
var clouds = document.getElementsByClassName("cls-1clouds");

///Giraffe paint drawing
var giraffeArrayPaint = ["sunPaint", "birdsPaint", "bushPaint", "treePaint", "skyPaint", "giraffesPaint", "cloudsPaint"];
var sunPaint = document.getElementsByClassName("cls-1sunPaint");
var birdsPaint = document.getElementsByClassName("cls-1birdsPaint");
var bushPaint = document.getElementsByClassName("cls-1bushPaint");
var treePaint = document.getElementsByClassName("cls-1treePaint");
var skyPaint = document.getElementsByClassName("cls-1skyPaint");
var giraffesPaint = document.getElementsByClassName("cls-1giraffesPaint");
var cloudsPaint = document.getElementsByClassName("cls-1cloudsPaint");
var giraffeElement;
var giraffePaintElement;
var visibleButtonGiraffe;

//Fish colored drawing
var fishArray = ["sand", "coral", "seaweed", "seastar", "fishfena", "fishy", "bubbles"];
var sand = document.getElementsByClassName("cls-1sand");
var coral = document.getElementsByClassName("cls-1coral");
var seaweed = document.getElementsByClassName("cls-1seaweed");
var seastar = document.getElementsByClassName("cls-1seastar");
var fishfena = document.getElementsByClassName("cls-1fishfena");
var fishy = document.getElementsByClassName("cls-1fishy");
var bubbles = document.getElementsByClassName("cls-1bubbles");
//Fish paint drawing
var fishArrayPaint = ["sandPaint", "coralPaint", "seaweedPaint", "seastarPaint", "fishfenaPaint", "fishyPaint", "bubblesPaint"];
var sandPaint = document.getElementsByClassName("cls-1sandPaint");
var coralPaint = document.getElementsByClassName("cls-1coralPaint");
var seaweedPaint = document.getElementsByClassName("cls-1seaweedPaint");
var seastarPaint = document.getElementsByClassName("cls-1seastarPaint");
var fishfenaPaint = document.getElementsByClassName("cls-1fishfenaPaint");
var fishyPaint = document.getElementsByClassName("cls-1fishyPaint");
var bubblesPaint = document.getElementsByClassName("cls-1bubblesPaint");
var fishElement;
var fishPaintElement;
var visibleButtonFish;

var trackerTask;

var catchColor = "";

var count = 0;
var counter = 0;
var lock;
var displayColor;

// Camera and canvas function starts!!
function colorCamera() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var tracker = new tracking.ColorTracker(['cyan', 'darkgrey', 'pink', 'yellow', 'orange', 'red', 'blue', 'green', 'purple']);
  //camera == true
  trackerTask = tracking.track('#video', tracker, {
    camera: true
  });

  lock = true;

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach(function(rect) {

      context.strokeStyle = rect.color;
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#000";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

      if (rect.width > 300 && rect.height > 300) {

        displayColor = document.getElementById("displayColor").style.backgroundColor = rect.color;
        //GIRAFFEEEEEE


        $(".cls-1sunPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1sunPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1birdsPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1birdsPaint").css("fill", rect.color);
          }
          //    counterPaint++;
        });

        $(".cls-1skyPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1skyPaint").css("fill", rect.color);
          }
          //    counterPaint++;
        });

        $(".cls-1cloudsPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1cloudsPaint").css("fill", rect.color);
          }
          //  counterPaint++;
        });

        $(".cls-1giraffesPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1giraffesPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1bushPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1bushPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1treePaint").click(function(e) {
          if (lock === true) {
            $(".cls-1treePaint").css("fill", rect.color);
          }
          //  counterPaint++;
        });


        //FIIIISH

        $(".cls-1sandPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1sandPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1coralPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1coralPaint").css("fill", rect.color);
          }
          //    counterPaint++;
        });

        $(".cls-1seaweedPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1seaweedPaint").css("fill", rect.color);
          }
          //    counterPaint++;
        });

        $(".cls-1seastarPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1seastarPaint").css("fill", rect.color);
          }
          //  counterPaint++;
        });

        $(".cls-1fishyPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1fishyPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1fishfenaPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1fishfenaPaint").css("fill", rect.color);
          }
          //counterPaint++;
        });

        $(".cls-1bubblesPaint").click(function(e) {
          if (lock === true) {
            $(".cls-1bubblesPaint").css("fill", rect.color);
          }
          //  counterPaint++;
        });
      }
    });

  });

}

var letters = ['yellow', 'red', 'green', "purple", "blue", "orange"];

function getRandomColor() {
  c = Math.floor(Math.random() * 6);
  catchColor += letters[c];
}

function appendColors() {
  for (var i = 0; i < giraffeArray.length; i++) {
    catchColor = "";
    getRandomColor();
    $(".cls-1" + giraffeArray[i]).css("fill", catchColor);
  }
  for (var j = 0; j < fishArray.length; j++) {
    catchColor = "";
    getRandomColor();
    $(".cls-1" + fishArray[j]).css("fill", catchColor);
  }
}


function drawingGiraffeWhite() {
  //giraffePaintElement = document.getElementById("giraffePaint").style.display = "block"; //comment these lines
  //giraffeElement = document.getElementById("giraffe").style.display = "none";            //to see camera
  // document.getElementById("sneakpeakGiraffe").style.display = "block";
  visibleButtonGiraffe = document.getElementById("doneButtonGiraffeId").style.display = "block";

}

function sneakpeakGiraffeFunction() {
  document.getElementById("giraffe").style.display = "block";
  document.getElementById("giraffePaint").style.display = "none";

}

function sneakpeakGiraffeWhiteFunction() {
  document.getElementById("giraffe").style.display = "none";
  document.getElementById("giraffePaint").style.display = "block";

}

function sneakpeakFishFunction() {
  document.getElementById("fish").style.display = "block";
  document.getElementById("fishPaint").style.display = "none";

}

function sneakpeakFishWhiteFunction() {
  document.getElementById("fish").style.display = "none";
  document.getElementById("fishPaint").style.display = "block";

}

function giraffedoneButton() {
  giraffeElement = document.getElementById("giraffe").style.display = "block";
  continueId = document.getElementById("continueId").style.display = "block";
  continueId = document.getElementById("doneButtonGiraffeId").style.display = "none";
  document.getElementById("sneakpeakGiraffe").style.display = "none";
  console.log("BLOCK");
  lock = false;
  console.log(lock);
}

function drawingFishWhite() {
  fishPaintElement = document.getElementById("fishPaint").style.display = "block";
  fishElement = document.getElementById("fish").style.display = "none";
  // document.getElementById("sneakpeakFish").style.display = "block";
  visibleButtonFish = document.getElementById("doneButtonFishId").style.display = "block";
}

function fishdoneButton() {
  fishPaintElement = document.getElementById("fish").style.display = "block";
  visibleButtonFish = document.getElementById("doneButtonFishId").style.display = "none";
  document.getElementById("sneakpeakFish").style.display = "none";
  console.log("BLOCK");
  lock = false;
  console.log(lock);
}

function changeIMG(e) {

  var eventId = e.target.id;

  var i = 0;
  var svgArray = ["giraffe", "fish"];

  if (eventId == "continueId") {
    counter++;
    setTimeout(drawingFishWhite, 5000);
    lock = true;
    console.log(lock);
  }

  for (i = 0; i < svgArray.length; i++) {
    document.getElementById(svgArray[i]).style.display = "none";
  }

  switch (counter) {
    case 0:
      $("#giraffePaint").css("display", "block");
      break;
    case 1:
      $("#fish").css("display", "block");
      $("#continueId").css("display", "none");
      $("#giraffePaint").css("display", "none");
      $("#giraffe").css("display", "none");
      break;
  }

}

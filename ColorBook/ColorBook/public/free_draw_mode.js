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
  document.getElementById("continueId").addEventListener("click", changeIMG);
  document.getElementById("backwardId").addEventListener("click", changeIMG);
}

var trackerTask;

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


  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach(function(rect) {
      
      if (rect.width > 110 && rect.height > 110 && rect.x > (canvas.width / 3) && rect.x < ((canvas.width / 3) + 300) && rect.y > (canvas.height / 3) && rect.y < ((canvas.height / 3) + 300)) {
        displayColor = document.getElementById("displayColor").style.backgroundColor = rect.color;
          console.log(rect.color);


          $(".cls-1").click(function(e) {
            $(this).css("fill", rect.color);
          });


      }
    });

  });

  }


var counter = 0;

function changeIMG(e){

  var eventId = e.target.id;

  var i = 0;
  var fish = document.getElementById("fish");
  var giraffe = document.getElementById("giraffe");
  var svgArray = ["fish", "giraffe"];

  if(eventId == "continueId"){
    counter++;
  }

  if(eventId == "backwardId"){
    counter--;
  }

  for(i = 0; i < svgArray.length; i++){
  document.getElementById(svgArray[i]).style.display = "none";
  }


//DISPLAY BLOCKS HERE
  switch(counter) {
      case 0:
          $("#fish").css("display", "block");
          $("#backwardId").css("display", "none");
          $("#continueId").css("display", "block");
          $(".backgroundVideo").css("display", "block");
          $("#giraffeVideo").css("display", "none");
          break;
      case 1:
          $("#backwardId").css("display", "block");
          $("#giraffe").css("display", "block");
          $("#continueId").css("display", "none");
          $(".backgroundVideo").css("display", "none");
          $("#giraffeVideo").css("display", "block", "z-index", "-1");
          break;
        }

}

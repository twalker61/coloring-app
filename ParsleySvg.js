import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Svg, {
	Path,
} from 'react-native-svg';

export default class ParsleySvg extends Component {
	constructor(props) {
		super(props);
		this.state = { colored: [] }
		this.onPress = this.color;
	}

	color = (el) => {
		let col_array = this.state.colored;
		col_array.push(el);
		//this.props.colored = 'true';
		// let col_array = this.state.colored
		this.setState({ colored: col_array })
		//this.state.colored.push(el);
	}

	render() {
		return (
			<View>
				<Svg width="500" height="500" viewBox="-198 370.9 100 125">
					<Path class="el-1"
						fill={this.state.colored.includes("el-1") ? "#f47929" : "#000000"}
						onPress={() => this.color("el-1")}
						d="M-152 396.8l-8-11.9-11.9-8-9.4 13.5 1.2-11.1-21.6 1.3 5.7 22-.4 12.6-1.1 4.2h-.1l-.1.7c-2.3 2-6 5.3-10 8.7.2-1.6.3-3.5.1-5.5-.4-3.5-1.6-6.2-2.9-8.2l-.2-2.6v-9.1l3.3-16.5h-15.2l-.4 6-5-7.8-6 9.1-8.9 5.7 7.4 4.8-5.4.4v15.2l16.6-3.3 8.7.3 1.9.2c.9 1.6 1.8 3.7 2.1 6.2.6 4.9-1.2 8.8-1.9 10-4.8 4.2-8.8 7.7-9.8 8.5-4.8 4.3-10.6 12-10.6 24.3h4c0-10.8 5-17.6 9.2-21.3.5-.5 2.1-1.9 4.3-3.8 1-.7 5.4-3.7 11.2-4.3 4.7-.5 8.7.5 11.4 1.7l.2 1.9v9.1l-3.3 16.5h15.1l.8-5.7 4.7 7.6 6.2-9.1 8.7-5.9-7.2-4.5 5.2-.8v-15.1l-16.6 3.3-8.7-.3-2.3-.2c-3.2-1.6-8.4-3.3-14.7-2.5-.5.1-1 .1-1.4.2 4.9-4.2 9.7-8.5 12.3-10.8l4.5-1.3 13-.1 21.8 5.7 1.3-21.6-12 1.3 14.2-9.7zm-62.8 6.3c-.6 6.1-4.1 9.2-9.9 10l-12.3-4.2 13.8-1.1-5.4-3.2-6.6-4.2 4.6-3.3 2.6-4.3 4.2 6.5 3.8 6.4 1-14.7h6.6l-2.4 12.1zm25.2 47.3c.6-5.5 3.6-9 9.9-10l12.3-2.4v6.8l-12.5 2 4.7 2.8 6 3.7-5 2.4-2.3 3.7-3.4-4.4-3.4-5.8-1.9 13.4-4.4-12.2zm31.2-40.5l-4.6 8-13.7-.5-14.1.1-1.8-1.5.5-13.8-.7-14.1 8.2-4.5-2.4 23.2 4.6-7.8 11.5-16.6-.2 13.1 13.6.3-16.1 11.3-9 5.4 24.2-2.6z" />
				</Svg>

			</View>
		);
	}
}







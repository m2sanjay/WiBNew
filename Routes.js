import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import GoogleMapScreen from './screens/GoogleMapScreen';
//import GoogleComponent from './screens/LocationSearchComponent';
//Scene key="GoogleComponent" component={GoogleComponent} title="Login" initial={true}/>



export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
							
							<Scene key="LoginScreen" component={LoginScreen} title="Login" initial={true}/>
							<Scene key="RegisterScreen" component={RegisterScreen} title="Register"/>	
							<Scene key="GoogleMapScreen" component={GoogleMapScreen} title="GoogleMap"/>

					</Stack>
			 </Router>
			)
	}
}
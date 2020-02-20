import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
							<Scene key="LoginScreen" component={LoginScreen} title="Login" initial={true}/>
							<Scene key="RegisterScreen" component={RegisterScreen} title="Register"/>	
							
					</Stack>
			 </Router>
			)
	}
}
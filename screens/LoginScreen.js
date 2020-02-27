import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';
import {TextInput, Button} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};

export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            agreed: false,
            email: '',
            phone: '',
            password: '',
            confirmPassword:'',
            name: '',
            otp: '',
            showPasswordStatus: 'unchecked',
            showConfirmPasswordStatus : 'unchecked',
            showPassword: true,
            showConfirmPassword: true,
            visible: false,
            toastermessage: "",
            toasterVisible: false,
            verifyVisible: false,
            isValidEmail: true,
            isValidName: true,
            isValidPhone: true,
            isValidPassword : true,
            isPasswordConfirmed : true,
            isValidConfirmPassword: true
        }
        this.isFormValid = false;
    }
    navigateToRegisterPage = () => {
      Actions.RegisterScreen();
  
    }
    render() {
        const passwordIcon = <Icon name="lock-open" size={20} color="white"/>
        const emailIcon = <Icon name="email" size={20} color="white"/>
        const textColor = { text: 'white', 
        placeholder: 'white', 
        primary: "#0F52BA", 
        background: 'transparent' 
      };

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#eee'
              }}>
			  <Image source={require('../assets/images/bg_gradient.png')} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}/>
                
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                  }}>
                  <KeyboardAwareScrollView>
                    <View style={styles.main}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                         <Image source={require('../assets/images/icon.png')} style={styles.logoImage} />
                      </View>
        
                      <View
                        style={{
                          padding: 5,
                          paddingTop: 0,
                          borderRadius: 5
                        }}>
                        <View style={styles.MainContainer}>
						
                              <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
                                  <Image source={require('../assets/images/fb.png')} style={styles.ImageIconStyle} />
                                  <View style={styles.SeparatorLine} />
                                  <Text style={styles.TextStyle}> Login Using Facebook </Text>
                              </TouchableOpacity>
                                                          
                              <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
                                  <Image source={require('../assets/images/ggl.png')} style={styles.ImageIconStyle} />
                                  <View style={styles.SeparatorLine} />
                                  <Text style={styles.TextStyle}> Login Using Google      </Text>
                              </TouchableOpacity>

                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row'
                          }}>
                          <View
                            style={{
                              flex: 1,
                              marginTop: 35,
                              marginRight: -10
                            }}>
                            {emailIcon}
                          </View>
                          <View
                            style={{
                              flex: 8,
                              marginTop: 0
                            }}>
                            <TextInput value=''
                                       label="Email Id"                                                
                                       mode='flat'
                                       underlineColor= 'white'
                                       theme={{ colors: textColor }}/>
                          </View>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row'
                          }}>
                          <View
                            style={{
                              flex: 1,
                              marginTop: 35,
                              marginRight: -10
                            }}>
                            {passwordIcon}
                          </View>
                          <View
                            style={{
                              flex: 8,
                              marginTop: 0
                            }}>
                            <TextInput
                                    label="Password"
                                    mode='flat'
                                    underlineColor= 'white'
                                    theme={{ colors: textColor }}/>
                          </View>
                        </View>
        
                        <View style={styles.buttonView}>
                          <TouchableOpacity  activeOpacity={0.5}>
                                  <Text style={styles.TextStyle}> Sign In</Text>
                          </TouchableOpacity>
                        </View>
                        
                        <View style={styles.buttonTextStyle}>
                          <Text  style={styles.messageStyle}>Don't have an account yet ?</Text>
                          <TouchableOpacity onPress={() => this.navigateToRegisterPage()}><Text style={styles.messageStyle}> Signup</Text></TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </KeyboardAwareScrollView>
                </View>
                <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>
              </View>
            );
}
}

const styles = StyleSheet.create({
    buttonView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width:340,
      height:35,
      marginLeft:32,
      backgroundColor:'#0E3872'
    },
    buttonTextStyle: {
      marginTop: 10,
      flexDirection: 'row',
      marginLeft:32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageStyle:{
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch'
    },
    main: {
      margin: 20
    },
    
    logoImage: {
      marginBottom: 20,
      marginTop: 50,
      height: 120,
      width: 130,
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },    
    GooglePlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E548C',
      borderWidth: .5,
      borderColor: '#091F45',
      height: 40,
      borderRadius: 5 ,
      margin: 5,
    },    
   FacebookStyle: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#1E548C',
     borderWidth: .5,
     borderColor: '#091F45',
     height: 40,
     borderRadius: 5 ,
     margin: 5,
    
   },    
   ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
    
   },    
   TextStyle :{
     color: "#fff",
     marginBottom : 4,
     marginRight :20,
  },    
  SeparatorLine :{
    backgroundColor : '#0F3A74',
    width: 2,
    height: 38
  }
  });
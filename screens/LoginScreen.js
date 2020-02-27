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
                                       label="Name"                                                
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
                          <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
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
   //remove have 1 reference change it
    buttonView: {
      marginTop: 10,
      backgroundColor:'transparent'
    },
    
    buttonTextStyle: {
      marginTop: 10,
      flexDirection: 'row'
    },
    
    input: {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      fontSize: 20,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: '#FFFFFF'
    },
    loginHeader: {
      paddingVertical: 10,
      backgroundColor: '#3480eb',
      justifyContent: 'center',
      alignItems: 'center'
    },
    messageStyle:{
      color: 'white',
      textAlign: 'right',
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
    googleImage: {
      marginTop:5,
     // height: 60,
      width: 380,
      backgroundColor:'transparent'
    },
    buttonContainer: {
      backgroundColor: '#5194ff',
      paddingVertical: 10,
      marginTop: 20,
      height: 50,
      borderRadius: 5
    },
    buttonContainer2: {
      backgroundColor: '#fcc358',
      paddingVertical: 10,
      marginTop: 20,
      height: 50,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFFFFF'
    },
    footer: {
      height: 30,
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 18,
      backgroundColor: 'gray'
    },
    copyright: {
      textAlign: 'center',
      margin: 20,
      fontSize: 14
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
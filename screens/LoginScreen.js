import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ToastAndroid 
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, Button} from 'react-native-paper';

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
                <View
                  source={require('../assets/images/bg_gradient.png')}
                  style={{
                    position: 'absolute',
                    top: 0,            
                    backgroundColor: '#131642',
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}></View>
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
                        <Image source={require('../assets/images/logo.png')} style={styles.image} />
                      </View>
        
                      <View
                        style={{
                          padding: 5,
                          paddingTop: 0,
                          borderRadius: 5
                        }}>
        
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
        
                        <View style={styles.buttonStyle}>
                        <Button mode="contained">
                            Sign In
                        </Button>
                      
                        </View>
                        <View style={styles.buttonStyle}>
                          <Text
                            style={{
                              color: 'white',
                              textAlign: 'right',
                              alignSelf: 'stretch'
                            }}
                            >Don't have an account yet ?</Text>
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
    buttonStyle: {
      marginTop: 10
    },
    image: {
      marginBottom: 20,
      marginTop: 50,
      height: 120,
      width: 120
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
    main: {
      margin: 20
    },
    image: {
      marginBottom: 20,
      marginTop: 50,
      height: 150,
      width: 150
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
    }
  });
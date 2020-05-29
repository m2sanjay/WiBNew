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
import {WebView} from 'react-native-webview';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 

export default  class  GoogleMapScreen extends Component {

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
            isMapReady: false,
            where: {lat:null, lng:null},
            isValidConfirmPassword: true
        }
        this.isFormValid = false;
    }
      componentDidMount(){
        
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        
        this.setState({
            isMapReady:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
      this.setState({
        isMapReady:true,
        where: {lat:22.5726,lng:88.3639 }
    })
    }
    navigateToLoginPage = () => {
      Actions.LoginScreen();
  
    }
    onMapLayout = () => {
      let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 20000,
        maximumAge: 60 * 60 * 24
    };
    this.setState({isMapReady:false});
    navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                            this.geoFailure,
                                            geoOptions);
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
                 
          <View style={{flex: 1, backgroundColor: '#eee'}}>
              <Image source={require('../assets/images/bg_gradient.png')} style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
              }}/>
              <View  style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                  <KeyboardAwareScrollView>
                      <View style={styles.main}>
                            <View  style={{ justifyContent: 'center', alignItems: 'center'  }}>
                              <Image source={require('../assets/images/icon.png')} style={styles.logoImage} />
                            </View>	
                            <View style={{ padding: 2, paddingTop: 0, borderRadius: 2 }}>
                        
                                <View style={styles.MainContainer}>
                                   
                                        <MapView  style={styles.map}
                                            provider='google'
                                            zoomEnabled={true}
                                            onPress={e => console.log(e.nativeEvent)}
                                            mapType='standard'
                                            showsScale={true}
                                            showsCompass={true}
                                            showsPointsOfInterest={true}
                                            showsBuildings={true}
                                            showsUserLocation={true}
                                            showsMyLocationButton={true}
                                            showsBuildings={false}
                                            minZoomLevel={5}
                                            maxZoomLevel={17}
                                            region={{latitude:this.state.where.lat,
                                                    longitude:this.state.where.lng,
                                                    longitudeDelta:0.1,
                                                    latitudeDelta:0.1}}
                                            onLayout={() => this.onMapLayout()}
                                        >
                                          { this.state.isMapReady &&
                                            <MapView.Marker
                                            coordinate={{
                                              latitude:this.state.where.lat,
                                              longitude:this.state.where.lng
                                              }}
                                              title={'TTl'}
                                              description={'Desc'}/>
                                          }
                                        </MapView>
                                    
                                </View>
                                <View style={styles.buttonTextStyle}>
                                  <Text  style={styles.messageStyle}>Already have a account ?</Text>
                                  <TouchableOpacity onPress={() => this.navigateToLoginPage()}><Text style={styles.messageStyle}> Sign In</Text></TouchableOpacity>
                                </View>
                            </View>
                      </View>
                  </KeyboardAwareScrollView>		
               </View>			
      </View>
                    
                       
                       
            
            );
}
}



const styles = StyleSheet.create({
 
  buttonTextStyle: {
    marginTop: 30,
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
    marginLeft:50,
    height:400,
    width:300
  },    
  map:{
  position:'absolute',
  flex:1,
  height: 400,
  top:30,
  left:0,
  bottom:0,
  justifyContent: 'center',
  alignItems: 'center',
  right:0
},

});
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
import {Actions} from 'react-native-router-flux';
import { MapView } from 'react-native-maps';


export default  class  MyMapView extends Component {

    constructor() {
        super();
        this.state = {
            isMapReady: false,
            where: {lat:null, lng:null}
        }
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
       

        return (
                
            <MapView  
            zoomEnabled={true}
            onPress={e => console.log(e.nativeEvent)}
            style={styles.map}
            provider='google'
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
            
            );
}
}




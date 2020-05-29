import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class MapInput extends React.Component {

    render() {
        return (

            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key 
                listViewDisplayed={false}    // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    this.props.notifyChange(details.geometry.location);
                }
                }

                query={{
                    key: 'AIzaSyDhrJsdRIS0xq8YQMBbqLElIykE9wJC4RU',
                    language: 'en'
                }}

                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
    }
}

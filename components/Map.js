import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from "../slices/navSlice";
import * as Location from 'expo-location';

const Map = () => {

    //const origin = useSelector(selectOrigin);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);
    
    let text = 'Waiting..';
    if (errorMsg) {
    text = errorMsg;
    } else if (location) {
    text = JSON.stringify(location);
    console.log(location)
    }

    return (

        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: {location.latitude},
                longitude: {location.coords.longitude},
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />

    )
}

export default Map

const styles = StyleSheet.create({})
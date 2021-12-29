import React,{useEffect,useState, useContext} from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../context/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import '../_mockLocation'
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';

const TrackCreateScreen = ({isFocused}) =>{
    const {state, startRecording, addLocation} = useContext(LocationContext);
    const [err] = useLocation(isFocused,addLocation) //location will be given by the expo location


    return (
        <SafeAreaView >
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err && <Text>please enable location services</Text>}
        </SafeAreaView>
    )
}



export default withNavigationFocus(TrackCreateScreen);
import React,{useEffect,useCallback, useContext} from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../context/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import '../_mockLocation'
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) =>{
    const {state, startRecording, addLocation} = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    })
    const [err] = useLocation(isFocused || state.recording,callback ) //location will be given by the expo location

    console.log(state.locations.length)
    return (
        <SafeAreaView >
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err && <Text>please enable location services</Text>}
            <TrackForm/>
        </SafeAreaView>
    )
}



export default withNavigationFocus(TrackCreateScreen);
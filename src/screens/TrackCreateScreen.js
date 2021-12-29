import React,{useEffect,useState, useContext} from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../context/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import '../_mockLocation'

export default function TrackCreateScreen() {
    const [err,setErr] = useState(null);
    const {state, startRecording, addLocation} = useContext(LocationContext);

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          await watchPositionAsync({
              // accuracy is basically how accurate we want our readting to be
              // the reading might vary from 1 -5km to m accuracy, the higher the accuracy the more battery consumption
              // BestForNavigation is the high accuracy
              accuracy: Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval:10 
          },(location)=>{
            addLocation(location);
          })
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(()=>{
        startWatching();
    },[])

    return (
        <SafeAreaView >
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err && <Text>please enable location services</Text>}
        </SafeAreaView>
    )
}




import React,{useEffect,useState} from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../context/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';

export default function TrackCreateScreen() {
    const [err,setErr] = useState(null);

    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
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




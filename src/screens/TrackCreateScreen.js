import React from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../context/Map';

export default function TrackCreateScreen() {
    return (
        <SafeAreaView >
            <Text h3>TrackCreateScreen</Text>
            <Map/>
        </SafeAreaView>
    )
}

import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

export default function TrackDetailScreen({navigation}) {
    const {state} = useContext(TrackContext)
    const _id = navigation.getParam('_id')
    const trackDetails = state.find(track => track._id === _id)
    const initialCoords = trackDetails.locations[0].coords
   
    return (
        <>
            <Text style={{fontSize:48}}>{trackDetails.name}</Text>
            <MapView style={{height:300}}
             initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01, 
                ...initialCoords
             }}   >
                <Polyline coordinates={trackDetails.locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    )
}

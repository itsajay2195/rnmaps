import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'

export default function TrackDetailScreen({navigation}) {
    const {state} = useContext(TrackContext)
    const _id = navigation.getParam('_id')
    const trackDetails = state.find(track => track._id === _id)
   
    return (
        <View>
            <Text>{trackDetails.name}</Text>
        </View>
    )
}

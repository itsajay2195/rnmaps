import React, { useContext } from 'react'
import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import { navigate } from '../navigationRef'


export default function TrackListScreen() {
    const { state, getTrack } = useContext(TrackContext)
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <NavigationEvents onWillFocus={getTrack} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigate('TrackDetail', { _id: item._id })
                        }}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>

                        </TouchableOpacity>
                        //Chevron is the arrow icon
                    )
                }}
            />
        </View>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}
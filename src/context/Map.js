import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import MapView,{Polyline}from 'react-native-maps'


export default function Map() {
    let points = []
    for(let i=0;i<20;i++){
        points.push({
            latitude:37.33233 + i * 0.001,
            longitude:-122.03121 +i * 0.001
        })
    }

    return (
           //Android is going to use google maps, and while displaying its longitude and latitude are going to be 0,0
           //iOS is going to use apple maps, and while displaying it is going to display your local country's view
           // porp initialRegion helps us to set the default view of the map
           //latitudeDelta and longitude delta basically depicts the zoom level of the map
           <MapView 
           style={styles.mapStyle}
           initialRegion={{
              latitude:37.33233,
              longitude:-122.03121,
              latitudeDelta:0.01,
              longitudeDelta:0.01

           }}>
               <Polyline coordinates={points}></Polyline>
               
           </MapView>
        
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        height:Dimensions.get('window').height/2,
    }
})



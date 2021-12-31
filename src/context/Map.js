import React,{useContext} from 'react'
import { View, Text, StyleSheet,Dimensions, ActivityIndicator } from 'react-native'
import MapView,{Polyline, Circle}from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';


export default function Map() {
    const {state:{currentLocation,locations}} = useContext(LocationContext);
    
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:Dimensions.get('window').height/3}}/>
    }
    return (
           //Android is going to use google maps, and while displaying its longitude and latitude are going to be 0,0
           //iOS is going to use apple maps, and while displaying it is going to display your local country's view
           // porp initialRegion helps us to set the default view of the map
           //latitudeDelta and longitude delta basically depicts the zoom level of the map
           <MapView 
           style={styles.mapStyle}
           initialRegion={{ //initial region is kind of like the default view of the map
              ...currentLocation.coords,
              latitudeDelta:0.01,
              longitudeDelta:0.01

           }}
           >
               <Polyline coordinates={locations.map(loc => loc.coords)}/>

               <Circle center={currentLocation.coords} 
                       radius={25}
                       strokeColor="rgba(158,158,255,1.0)"//this will be the border of the circle
                       fillColor="rgba(158,158,255,0.3)"></Circle>

               
           </MapView>
        
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        height:Dimensions.get('window').height/2,
    }
})



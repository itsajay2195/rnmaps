import * as Location from  'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation =increment =>{
    return{
        timestamp: 10000000,
        coords:{
            speed :0,
            heading :0,
            accuracy :5,
            altitudeAccuracy :5,
            altitude:5,
            longitude: -122.03121 + increment * tenMetersWithDegrees,
            latitude: 37.33233 + increment * tenMetersWithDegrees
        }
    }
}

// when ever we import this file, once every secong we are going to emit an event directly into location library
let counter = 0 ;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++; 
},1000);
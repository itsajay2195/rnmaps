import React,{useState,useEffect} from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { call } from 'react-native-reanimated';

export default (shouldTrack, callback) => {
    const [err,setErr] = useState(null);
    const [subscriber,setSubscriber] = useState(null)
    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          const sub = await watchPositionAsync({
              // accuracy is basically how accurate we want our readting to be
              // the reading might vary from 1 -5km to m accuracy, the higher the accuracy the more battery consumption
              // BestForNavigation is the high accuracy
              accuracy: Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval:10 
          },
            callback
          );
          setSubscriber(sub);
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(()=>{
        if(shouldTrack){
            startWatching();
        }else{
            subscriber.remove();
            setSubscriber(null)
        }
    },[shouldTrack])

    return [err];
    
}

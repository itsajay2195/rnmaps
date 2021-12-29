import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'

const locationReducer = (state, action) => {
    switch (action.type) {
        
        default:
            return state
    }
}

const startRecodring = dispatch => ()=>{

}

const stopRecodring = dispatch => ()=>{
    
}

const addLocation = dispatch => ()=>{
    
}


export const {Context,Provider} = createDataContext(
    locationReducer,
    {startRecodring,stopRecodring,addLocation},
    {recording:false, locations:[],currentLocation:null} // initial state
)
import createDataContext from './createDataContext'
// import trackerApi from '../api/tracker'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {navigate} from '../navigationRef'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        default:
            return state
    }
}

const startRecodring = dispatch => ()=>{

}

const stopRecodring = dispatch => ()=>{
    
}

const addLocation = dispatch => (location)=>{
    console.log('tracking....')
    dispatch({type:'add_current_location',payload:location})
}



export const {Context,Provider} = createDataContext(
    locationReducer,
    {startRecodring,stopRecodring,addLocation},
    {recording:false, locations:[],currentLocation:null} // initial state
)
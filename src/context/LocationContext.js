import createDataContext from './createDataContext'
// import trackerApi from '../api/tracker'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {navigate} from '../navigationRef'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }

        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }

        case 'start_recording':
            return { ...state, recording: true }

        case 'stop_recording':
            return { ...state, recording: false }

        case 'change_name':
            return { ...state, name: action.payload }
        default:
            return state
    }
}



const addLocation = dispatch => (location,recording)=>{
    console.log('add loc called')
    dispatch({type:'add_current_location',payload:location})
    if(recording){
        dispatch({type:'add_location',payload:location})
        
    }  
}

const startRecording = dispatch => (location,recording)=>{
    console.log('start rec called')
    dispatch({type:'start_recording'})
}

const stopRecording = dispatch => (location,recording)=>{
    console.log('stop rec called')
    dispatch({type:'stop_recording'})
}

const changeName = dispatch => (location,recording)=>{
    console.log('change name  called')
    dispatch({type:'change_name'})
}



export const {Context,Provider} = createDataContext(
    locationReducer,
    {addLocation,startRecording,stopRecording,changeName},
    {name:'',recording:false, locations:[],currentLocation:null} // initial state
)
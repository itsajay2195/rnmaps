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



const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location })
    if (recording) {
        dispatch({ type: 'add_location', payload: location })

    }
}

const startRecording = dispatch => (location, recording) => {
    dispatch({ type: 'start_recording' })
}

const stopRecording = dispatch => (location, recording) => {

    dispatch({ type: 'stop_recording' })
}

const changeName = dispatch => (name) => {
    console.log('change name is ')
    dispatch({ type: 'change_name',payload:name })
}



export const { Context, Provider } = createDataContext(
    locationReducer,
    { addLocation, startRecording, stopRecording, changeName },
    { name: '', recording: false, locations: [], currentLocation: null } // initial state
)
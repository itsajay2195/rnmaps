import createDataContext from './createDataContext'


const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'add_track':
            return { ...state, tracks: [...state.tracks, action.payload] }
        case 'get_tracks':
            return { ...state, tracks: state.tracks.filter(track => track.id !== action.payload) }
        case 'get_track':
            return { ...state, tracks: state.tracks.map(track => track.id === action.payload.id ? action.payload : track) }
        default:
            return state
    }
}



const addTrack = (dispatch) =>(name, locations) => {
    console.log('hi',name,locations.length)
}


export const { Context, Provider } = createDataContext(
    TrackReducer,
    { addTrack},
    {} // initial state
)


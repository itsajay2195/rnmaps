import createDataContext from './createDataContext'
import tracker from '../api/tracker'


const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'get_tracks':
            return action.payload
        default:
            return state
    }
}



const getTrack = (dispatch) =>async() => {
    const response = await tracker.get('/tracks')
    dispatch({ type: 'get_tracks', payload: response.data })
}

const addTrack = (dispatch) =>async(name, locations) => {
    const response = await tracker.post('/tracks', { name, locations })
}

export const { Context, Provider } = createDataContext(
    TrackReducer,
    { addTrack,getTrack},
    {} // initial state
)


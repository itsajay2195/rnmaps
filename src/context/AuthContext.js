
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }

        case 'add_error':
            return { errorMessage: '', token: action.payload }
        default:
            return state
    }
}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'singup', payload: response.data.token })
        // console.log(response.data)     
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
}



const signin = (dispatch) => {
    // try sigining in
    // if the sign in is successful change the sate and say we are authenticated
    // display the error message in case of failure
}

const signout = (dispatch) => {
    // try signing out

}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup },
    { token: null, errorMessage: '' })
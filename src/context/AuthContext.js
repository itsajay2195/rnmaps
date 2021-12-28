
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }

        case 'signin':
            return { errorMessage: '', token: action.payload }
        
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        
        case 'signout':
            return { token: null, errorMessage: '' }

        default:
            return state
    }
}

const clearErrorMessage = (dispatch) =>()=> {
    dispatch({type:'clear_error_message'})
}

const localSignIn = (dispatch)=>async()=>{
    const token = await AsyncStorage.getItem('token')
    dispatch({type:'signin',payload:token})
    if(token){
        navigate('TrackList')
    }else{
        navigate('Signin')
    }

}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList')
       
    } catch (err) {
        console.warn('hi')     
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
}


// this function can also be writeen with the retrun keyword, but this is more readable
const signin = (dispatch) => async ({ email, password })=>{
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList')
       
    } catch (err) {
        console.warn('hi')     
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
    
}



const signout = (dispatch) =>  async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    navigate('Signup')
    
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup,signin,clearErrorMessage,localSignIn,signout},
    { token: null, errorMessage: '' })
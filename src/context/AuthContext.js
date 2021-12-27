
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type){
        default :
            return state
    }
}

const signup =  dispatch =>{
    return async({email,password}) =>{
        try{
            const response = await trackerApi.post('/signup',{email,password})
            console.log(response.data)
            
        }catch(err){
            console.log(err)
        }
    }
}
    


const signin=(dispatch)=>{
    // try sigining in
    // if the sign in is successful change the sate and say we are authenticated
    // display the error message in case of failure
}

const signout=(dispatch)=>{
    // try signing out
    
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup},
    [])
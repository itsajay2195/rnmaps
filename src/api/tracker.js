import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL:'http://acaf-183-82-176-151.ngrok.io'
})

instance.interceptors.request.use(
    async (config)=>{
        //this function will be called whenever we make a request
        const token = await AsyncStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config // we will retun our modified config obj
        
    },
    (err)=>{
        //this function will be called when there is an error
        return Promise.reject(err)

    })

export default instance
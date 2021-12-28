import React,{ useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import {Context} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

export default function SignupScreen({ navigation }) {
    const {state,signup} = useContext(Context);
    
    return (
        <View style={styles.container}>
            
            <AuthForm
             headerText="Sign Up for Tracker"
             errorMessage={state.errorMessage}
             submitButtonText="Sign Up"
             onSubmit={signup}
             linkText="signup"
             routeName="Signin"
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        marginBottom:200
    },
    linkText:{
        color:'blue'
    }
})


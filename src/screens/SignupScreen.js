import React,{useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../components/Spacer'
import {Context} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

export default function SignupScreen({ navigation }) {
    const {state,signup} = useContext(Context);
    
    
    console.log(state)
    return (
        <View style={styles.container}>
            <AuthForm
             headerText="Sign Up for Tracker"
             errorMessage={state.errorMessage}
             submitButtonText="Sign Up"
             onSubmit={signup}
            />
            <Spacer>
                <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                    <Text style={styles.linkText}>Already have an account? Sign in</Text>
                </TouchableOpacity>
            </Spacer>
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


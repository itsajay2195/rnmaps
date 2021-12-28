import React,{useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import {NavigationEvents} from 'react-navigation'


export default function SigninScreen() {
    const {state,signin,clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign in to your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
                linkText="Hello"
                routeName="Signup"
            />
        </View>
    )
}


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },

})

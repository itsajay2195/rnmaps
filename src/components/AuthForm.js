import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const AuthForm = ({ navigation, headerText, errorMessage, onSubmit, submitButtonText, routeName,linkText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3> {headerText}</Text>
            </Spacer>
            <Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={setEmail} />
            <Spacer />
            <Input secureTextEntry autoCapitalize="none" autoCorrect={false} label="Password" value={password} onChangeText={setPassword} />
            {errorMessage ? <Text style={{ margin: 15, color: 'red', fontSize: 16 }}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
            <NavLink linkText="signup" navigation={navigation} routeName={routeName} />
        </>
    )
}


const NavLink = ({navigation, linkText, routeName}) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                {console.warn(routeName)}
                <Text style={{color:'blue'}}>{linkText === 'signup' ? 'Already have an account? Sign in' : "Don't have an account? sign up"}</Text>
            </TouchableOpacity>
        </Spacer>
    )

}

const styles = StyleSheet.create({

})

export default withNavigation(AuthForm)
import React,{useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../components/Spacer'
import {Context} from '../context/AuthContext'

export default function SignupScreen({ navigation }) {
    const {state,signup} = useContext(Context);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3> Sign Up for Tracker</Text>
            </Spacer>
            <Input autoCapitalize="none"  autoCorrect={false} label="Email" value={email} onChangeText={setEmail}/>
            <Spacer />
            <Input secureTextEntry autoCapitalize="none"  autoCorrect={false} label="Password" value={password} onChangeText={setPassword}/>
            <Spacer>
                {/* <Button title="Sign Up" onPress={() => signup({email,password})} /> */}
                <TouchableOpacity onPress={() => signup({email,password})}> 
                    <Text style={styles.button} >Sign Up</Text>
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
    }
})


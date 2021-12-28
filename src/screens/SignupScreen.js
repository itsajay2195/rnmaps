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
    
    
    console.log(state)
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3> Sign Up for Tracker</Text>
            </Spacer>
            <Input autoCapitalize="none"  autoCorrect={false} label="Email" value={email} onChangeText={setEmail}/>
            <Spacer />
            <Input secureTextEntry autoCapitalize="none"  autoCorrect={false} label="Password" value={password} onChangeText={setPassword}/>
            {state.errorMessage ? <Text style={{margin:15,color:'red',fontSize:16}}>{state.errorMessage}</Text>:null}
            <Spacer>
                <Button title="Sign Up" onPress={() => signup({email,password})} />
            </Spacer>
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


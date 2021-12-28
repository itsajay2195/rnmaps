import React,{useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

export default function AuthForm({headerText,errorMessage,onSubmit,submitButtonText}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
            <Spacer>
                <Text h3> {headerText}</Text>
            </Spacer>
            <Input autoCapitalize="none"  autoCorrect={false} label="Email" value={email} onChangeText={setEmail}/>
            <Spacer />
            <Input secureTextEntry autoCapitalize="none"  autoCorrect={false} label="Password" value={password} onChangeText={setPassword}/>
            {errorMessage ? <Text style={{margin:15,color:'red',fontSize:16}}>{errorMessage}</Text>:null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({email,password})} />
            </Spacer>
        </>
    )
}


const styles= StyleSheet.create({

})
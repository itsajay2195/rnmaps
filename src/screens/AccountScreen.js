import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context} from '../context/AuthContext'

export default function AccountScreen() {
    const {state,signout} = useContext(Context);
    return (
        <>
            <Text>Account Screen</Text>
            <Spacer>
            <Button title="Sign Out" onPress={signout}></Button>
            </Spacer>
        </>
    )
}

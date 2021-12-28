import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context} from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountScreen() {
    const {state,signout} = useContext(Context);
    return (
        <SafeAreaView >
            <Text>Account Screen</Text>
            <Spacer>
            <Button title="Sign Out" onPress={signout}></Button>
            </Spacer>
        </SafeAreaView>
    )
}




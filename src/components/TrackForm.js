import React, {useContext} from 'react'
import { Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';

export default function TrackForm() {
    const {state, startRecording, stopRecording,changeName} = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input value ={state.name} onChangeText={changeName}></Input>
            </Spacer>

            <Spacer>
                {/* {console.log(recording)} */}
               {state.recording ? <Button title="Stop" onPress={stopRecording}></Button> : <Button title="Start Recording" onPress={startRecording}></Button>}
            </Spacer>
        </>
    )
}

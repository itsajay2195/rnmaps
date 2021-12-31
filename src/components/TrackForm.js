import React, {useContext} from 'react'
import { Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

export default function TrackForm() {
    const {state:{name,locations,recording}, startRecording, stopRecording,changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={(e)=>changeName(e)}></Input>
            </Spacer>

            <Spacer>
                {/* {console.log(recording)} */}
               {recording ? <Button title="Stop" onPress={stopRecording}></Button> : <Button title="Start Recording" onPress={startRecording}></Button>}
               <Spacer>
               {!recording && locations.length>0 ? <Button title="Save Recording" onPress={saveTrack}></Button> : null}
               </Spacer>
               
            </Spacer>
        </>
    )
}

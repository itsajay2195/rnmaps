import {useContext} from "react";
import {Context as LocationContext} from "../context/LocationContext";
import {Context as TrackContext} from "../context/TrackContext";

export default () => {
    const {state:{name,locations}} = useContext(LocationContext);
    const {addTrack} = useContext(TrackContext);

    const saveTrack = () => {
        console.log('from saveTrack',name)
        addTrack(name,locations);
    }

    return [saveTrack];

}


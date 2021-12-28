import React,{useEffect,useContext} from 'react'
import {Context} from '../context/AuthContext'

export default function ResolveAuthScreen() {
    const {localSignIn} = useContext(Context);

    useEffect(() => {
        localSignIn()
    }, [])
    
    return null
}

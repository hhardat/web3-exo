import React from 'react'
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const { opinions, setOpinions } = useState([])
    console.log(opinions)

    const useOpinion = (props) => {
        const {counter, setCounter} = useState(1)
        const newOpinion = {
            content : props.text,
            id : uuidv4(),
            count : counter,
            useCount : setCounter
            
        }
        setOpinions(opinions.concat(newOpinion))
    }
    
    const exposedValue = {
        opinions, useOpinion
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>   
}

export { Context, ProviderWrapper }
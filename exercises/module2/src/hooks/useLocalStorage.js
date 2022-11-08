import { useState } from 'react'


const useLocalStorage = (key, initialValue) => {

    const [stateValue, setStateValue] =  useState(() => {
        if (localStorage.getItem(key) == null) localStorage.setItem(key, JSON.stringify(initialValue))
        const value = JSON.parse(localStorage.getItem(key))
        return value
    })

    return [stateValue, (update) => {   
        setStateValue(update)
        localStorage.setItem(key, JSON.stringify(update))
    }]
}

export default useLocalStorage
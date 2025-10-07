import {createContext, useEffect, useState} from 'react'
import {fetchIPData} from '../api/apiFetch.js'


export const IPContext = createContext(null)

export const IPProvider = ({children})=>{
    const [ipData, setIPData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const apiKey = import.meta.env.VITE_IP_API_KEY; 
    const defaultIPAddress = '8.8.8.8'

    useEffect(()=>{
        async function getData(){
            try{
            const data = await fetchIPData(apiKey, defaultIPAddress)
            setIPData(data)
        }catch(error){
            setError(error.message)

        }finally{
            setLoading(false)
        }

        }

        getData()
        
    }, [defaultIPAddress, apiKey])


    return(
        <IPContext.Provider value={{ipData, loading, error}}>
            {children}
        </IPContext.Provider>
    )
}
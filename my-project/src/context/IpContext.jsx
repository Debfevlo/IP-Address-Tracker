import {createContext, useEffect, useState} from 'react'
import {fetchIPData} from '../api/apiFetch.js'


export const IPContext = createContext(null)

export const IPProvider = ({children})=>{
    const [ipData, setIPData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const apiKey = import.meta.env.VITE_IP_API_KEY; 
    const defaultIPAddress = '8.8.8.8'

    const handleFetchIP = async (ip = defaultIPAddress)=>{

        try {
      setLoading(true);
      setError(null);

      const data = await fetchIPData(apiKey, ip);
      setIPData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

    useEffect(()=>{
       handleFetchIP(defaultIPAddress)
    }, [defaultIPAddress, apiKey])


    return(
        <IPContext.Provider value={{ipData, loading, error, handleFetchIP}}>
            {children}
        </IPContext.Provider>
    )
}
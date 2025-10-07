

export async function fetchIPData (apiKey, ipAddress){
    try{
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`);
        if(!response.ok){
            throw new Error(`HTPP Error: ${response.status}`)
        }

        const data = await response.json()
        return data

    }catch(error){
        console.error('Error occured wile fetch the IP data', error)
        throw error
    }
}
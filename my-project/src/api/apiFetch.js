
const apiKey = process.env.REACT_APP_IP_API_KEY;


async function fetchIPData (apiKey){
    try{
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}at_2Sjctwz5EUpzmi6Z2JIW7Oehp501L&ipAddress=8.8.8.8`);
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
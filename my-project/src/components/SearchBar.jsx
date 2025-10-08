import { useState, useContext } from "react"
import { IPContext } from "../context/IpContext"

const SearchBar = () => {
    const {handleFetchIP} = useContext(IPContext)
    const [ipAddress, setIPAddress] = useState("")

    const handleInputValue = (e)=>{
        setIPAddress(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!ipAddress.trim()) return;
        handleFetchIP(ipAddress);
        setIPAddress('')
        
    }

  return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center py-8">
            <input onChange={handleInputValue} value={ipAddress} type="text" placeholder="Search for any IP address or domain" className="w-full md:w-[400px] py-4 px-3 bg-white text-Gray-950 font-semibold rounded-l-xl text-sm md:text-base shadow-md outline-none relative"/>
            <button type="submit" className="h-13 md:h-14 w-14 bg-black rounded-r-xl shadow-md hover:cursor-pointer"><img src="images/icon-arrow.svg" alt="icon-arrow" className="mx-auto"/></button>
        </form>
  )
}

export default SearchBar
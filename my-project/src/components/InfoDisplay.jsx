import { useContext } from "react"
import { IPContext } from "../context/IpContext"

const InfoDisplay = () => {
    const { ipData } = useContext(IPContext) || {};
    const location = ipData?.location;
    const country = location?.country
    const IPAddress = ipData?.ip
    const Time_Zone = location?.timezone
    const ISP = ipData?.isp

  return (
    <div className='flex flex-col text-center gap-3 md:gap-0  md:flex-row bg-white md:w-3/4 p-10 justify-between rounded-lg'>
        <div className='flex flex-col gap-1'>
            <p className="text-xs text-gray-400">IP ADDRESS</p>
            <p className="text-xl font-bold">{IPAddress}</p>
        </div>
        <div className='md:border-[0.5px] border-gray-300'></div>
        <div  className='flex flex-col gap-1'>
            <p className="text-xs text-gray-400">LOCATION</p>
            <p className="text-xl font-bold">{country}</p>
        </div >
        <div className='md:border-[0.5px] border-gray-300'></div>
        <div  className='flex flex-col gap-1'>
            <p className="text-xs text-gray-400">TIME ZONE</p>
            <p className="text-xl font-bold">{Time_Zone}</p>
        </div>
        <div className='md:border-[0.5px] border-gray-300'></div>
        <div  className='flex flex-col gap-1'>
            <p className="text-xs text-gray-400">ISP</p>
            <p className="text-xl font-bold">{ISP}</p>
        </div>
    </div>
  )
}

export default InfoDisplay
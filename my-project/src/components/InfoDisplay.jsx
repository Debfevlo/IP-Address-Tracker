

const InfoDisplay = () => {
  return (
    <div className='flex bg-amber-200 md:w-3/4 p-10 justify-between rounded-lg'>
        <div className='flex flex-col'>
            <p>IP ADDRESS</p>
            <p>192.212.174.101</p>
        </div>
        <div className='border-1'></div>
        <div  className='flex flex-col'>
            <p>LOCATION</p>
            <p>Brooklyn Nwe York</p>
        </div >
        <div className='border-1 border-gray-300'></div>
        <div  className='flex flex-col'>
            <p>TIME ZONE</p>
            <p>UTC-05:00</p>
        </div>
        <div className='border-1'></div>
        <div  className='flex flex-col'>
            <p>ISP</p>
            <p>SpaceX Starlink</p>
        </div>
    </div>
  )
}

export default InfoDisplay
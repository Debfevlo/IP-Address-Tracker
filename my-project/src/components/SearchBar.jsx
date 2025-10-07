

const SearchBar = () => {
  return (
    <div className="py-8">
        <div className="flex justify-center items-center">
        <input type="text" placeholder="Search for any IP address or domain" className="w-full md:w-[400px] py-4 px-3 bg-white text-Gray-950 font-semibold rounded-l-xl text-sm md:text-base"/>
        <button className="h-13 md:h-14 w-14 bg-black rounded-r-xl"><img src="images/icon-arrow.svg" alt="icon-arrow" className="mx-auto"/></button>
        </div>
        
    </div>
  )
}

export default SearchBar
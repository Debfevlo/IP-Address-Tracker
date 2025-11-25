import SearchBar from "./SearchBar"


const Header = () => {
  return (
    <div className=" bg-[url('/images/pattern-bg-mobile.png')] md:bg-[url('/images/pattern-bg-desktop.png')] bg-center h-72 md:h-60  text-white  text-center bg-cover p-8 relative">
        <p className=" text-3xl md:text-4xl font-semibold"> IP Address Tracker</p>
        <SearchBar/>
        
    </div>
  )
}

export default Header
import Header from "./components/Header"
import InfoDisplay from "./components/InfoDisplay"
import IPMap from "./components/IPMap"





const App = () => {
  return (
    <div className="relative"> 
      <Header/>
      <div className="absolute left-1/2 md:left-[60%] top-48  transform -translate-x-1/2 z-20 w-11/12 md:w-3/4">
        <InfoDisplay/>
      </div>
      <div className="relative z-0">
         <IPMap/>
      </div>
    </div>
  )
}

export default App
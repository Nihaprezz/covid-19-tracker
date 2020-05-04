import React, {useState, useEffect} from 'react';
import { fetchGlobalData } from "./api/index";
import Cards from "./components/Cards/cards"

function App() {
  const [globalInfo, setGlobalInfo] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setGlobalInfo(await fetchGlobalData())
    }

    fetchAPI();
  }, [])

  const formatDate = (date) => {
    let newDate = new Date(date)
    return newDate.toDateString()
  }

  return (

    <div className="App">
      {globalInfo.length === 0 ? (
        <h1>Loading...</h1>
      ):(
        <div>
          <Cards globalInfo={globalInfo}/> 
          <h3>Last Updated: {formatDate(globalInfo.lastUpdate)}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

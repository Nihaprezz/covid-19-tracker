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


  return (
    <div className="App">
      {globalInfo.length === 0 ? (
        <h1>Loading...</h1>
      ):(
        <Cards globalInfo={globalInfo}/> 
      )}
    </div>
  );
}

export default App;

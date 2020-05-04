import React, {useState, useEffect} from 'react';
import { fetchGlobalData } from "./api/index";
import Cards from "./components/Cards/cards"
import Form from "./components/Form/form"

function App() {
  const [globalInfo, setGlobalInfo] = useState([])
  const [country, setCountry] = useState('global')

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

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
}

  return (

    <div className="App">
      {globalInfo.length === 0 ? (
        <h1>Loading...</h1>
      ):(
        <div>
          <Cards globalInfo={globalInfo}/> 
          <h3>Last Updated: {formatDate(globalInfo.lastUpdate)}</h3>

          <Form handleCountryChange={handleCountryChange} country={country}/>
        </div>
      )}
    </div>
  );
}

export default App;

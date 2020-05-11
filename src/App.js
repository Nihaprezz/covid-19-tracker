import React, {useState, useEffect} from 'react';
import { fetchGlobalData, fetchCountryInfo } from "./api/index";
import Cards from "./components/Cards/cards"
import Form from "./components/Form/form"
import Chart from "./components/Charts/chart"

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

    const getCountryInfo = async () => {
      setGlobalInfo(await fetchCountryInfo(e.target.value))
    }
    //working on async feature to get the country stats
    getCountryInfo();
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

          <Chart globalInfo={globalInfo}/>
        </div>
      )}
    </div>
  );
}

export default App;

const url = 'https://covid19.mathdro.id/api';

const fetchGlobalData = async () => {
    try {
        const data = await fetch(url);
        const json = await data.json()

        const { confirmed, deaths, recovered, lastUpdate} = json
   
        return { confirmed, deaths, recovered, lastUpdate }

    } catch (error) {
        console.log(error)
    }
}

const fetchCountries = async () => {
    try {
        const data = await fetch(url + '/countries')
        const json = await data.json()
        
        return json.countries.map(country =>  country.name)
    } catch (error) {
        console.log(error)
    }
}

export { fetchGlobalData, fetchCountries}
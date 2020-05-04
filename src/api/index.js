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

export { fetchGlobalData }
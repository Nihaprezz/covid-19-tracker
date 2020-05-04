import React, {useState, useEffect} from "react";
import {FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'
import { fetchCountries } from "../../api/index"
import '../../styles/form.scss'

const Form = (props) => {
    const [countries, setCountries ] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }

        getCountries();
    }, [])


    return (
        <div>
            <FormControl className="country-form">
                <InputLabel id="demo-simple-select-label">Country</InputLabel>

                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.country}
                onChange={props.handleCountryChange}
                >

                <MenuItem key='global' value='global'>Global</MenuItem>
                {countries.map((country, index) => {
                    return <MenuItem key={index} value={country}>{country}</MenuItem>
                })}                
                </Select>
            </FormControl>
        </div>
    )
}

export default Form;
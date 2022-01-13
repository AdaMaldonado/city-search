import React, {useState} from "react";
import axios from "axios";

export default function Form(props) {

    const [cityName, setCityName] = useState("")

    const getCity = () => {
        axios.get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`)
            .then(response => {props.setData(response.data)})
    }

    return (
        <div>
            <h1>City Name Search</h1>
            <label>City Name:</label>
            <input placeholder="Try SPRINGFIELD"
                   onChange={event => setCityName(event.target.value.toUpperCase())}
                   value={cityName}/>
            <button onClick={getCity}>Get Details</button>
            <br></br>
            <h2>Zip Codes</h2>
        </div>
    )
}
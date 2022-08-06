import React from 'react'
import { useState, useEffect } from "react"
import CountryData from './CountryData';

function Ip() {
    const [isLoading, setIsLoading] = useState('true');
    const [ipData, setIpData] = useState([]);

    const getData = async () => {
        setIsLoading(true)
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_API_KEY}`);
        //console.log(response)
        if (response.ok) {
            setIsLoading(false)
          const result = await response.json();
          console.log(result)
          setIpData(result)
        }
      }

    useEffect(() => {
        getData()
    }, [])

    console.log(ipData.location.country)

  return (
    <div>
        {ipData.ip}
        <CountryData countryCode={ipData.location.country}/>
    </div>
  )
}

export default Ip

//https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=8.8.8.8

// setFilter(ipData.location.country)
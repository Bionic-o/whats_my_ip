import React from 'react'
import { useState, useEffect } from "react"
import CountryData from './CountryData';
import MapLocation from './MapLocation';
import Flag from './Flag';
import { BsCalendar2CheckFill, BsFillClockFill } from 'react-icons/bs'

function Ip() {
    const [isLoading, setIsLoading] = useState('true');
    const [ipData, setIpData] = useState(false);
    const { DateTime } = require("luxon");

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

    if (!ipData) {
        return (
            <div>loading...</div>
        )
    }

    console.log(DateTime.now().toLocaleString())
    console.log(DateTime.TIME_24_SIMPLE.toLocaleString())


const milliseconds = DateTime.now().diff(DateTime.local(1982, 5, 25)).milliseconds;
const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

 const formattedTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
].join(":");

console.log(formattedTime); // 21:12:09

  return (
    <div>
        <h1 className="header">What's my IP?</h1>
        <MapLocation lattitude={ipData.location.lat} longitude={ipData.location.lng}/>
            <div className="ipInfo">
                <div className="CountryFlag">
                    <Flag flag={ipData.location.country.toLowerCase()}/>
                    <div>
                        <p>Your IP address is {ipData.ip}</p>
                        <CountryData countryCode={ipData.location.country}/>
                    </div>
                    <hr></hr>
                    <div>
                        <p><BsCalendar2CheckFill /> {DateTime.now().toLocaleString()}</p>
                        <p><BsFillClockFill /> {formattedTime}</p>
                        <p>{}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Ip

//https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_537SSDVEfpdICEnPV83529yI85Sz5
//https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_cG7fuW6I4QieFkPa6wSGIew9iRd56

// setFilter(ipData.location.country)

//  <div className="memeImg" style={{width: `${randomMemes.width}+"px"`, height: `${randomMemes.height}+"px"`, backgroundImage: `url(${randomMemes.url})`}}></div>


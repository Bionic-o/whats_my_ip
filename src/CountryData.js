import React, { useEffect, useState } from 'react'

function CountryData({countryCode}) {

    const [countries, setCountries] = useState([])

    async function loadCountries() {
        const options = {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: `
            {country(code: "${countryCode}") {
                code,
                name,
                capital
              }
            }       
            `
          })
        };
      
        const response = await fetch(`https://countries.trevorblades.com/`, options)
        const result = await response.json()
        console.log(result.data.country || [])
        setCountries( (result.data.country || [] ))
      }

      useEffect(() => {
          loadCountries()
      }, [])

  return (
    <div>
        <p>You are currently located in {countries.name}</p>
    </div>
  )
}

export default CountryData
import React from 'react'

function Flag({flag}) {

    const source = `https://flagcdn.com/w320/${flag}.png`
    const sourceset = `https://flagcdn.com/w640/${flag}.png 2x`
    const alternative = flag.name
  return (
    <div className="flag">
        <img
            src={source}
            srcset={sourceset}
            width="320"
            alt={alternative}>
        </img>
    </div>
  )
}

export default Flag
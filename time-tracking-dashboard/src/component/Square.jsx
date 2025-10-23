import React from 'react'
import ellipsis from "../images/icon-ellipsis.svg";
import Data from "../data.json"

const Square = ({ activity, className, timeframe, number }) => {
    console.log(className.slice(12, className.length));
  return (
      <div className={`theme-card ${className}`}>
          <div className="theme-card__border">
              <img src={activity} alt={`${className.slice(12, className.length)} icon`} />
          </div>
          <div className="theme-card__card">
              <div className="theme-card__ellipsis">
                  <h2>Work</h2>
                  <img src={ellipsis} alt="Ellipsis icon" />
              </div>
              <div className="theme-card__time">
                  <h1>{Data[number].timeframes[timeframe].current} hrs</h1>
                  <p>Last Week - {Data[number].timeframes[timeframe].previous} hrs</p>
              </div>
          </div>
      </div>  )
}

export default Square
import React from 'react'
import jeremy from "../images/image-jeremy.png";
import { useState } from "react"

const Rectangle = ({setTimeframe}) => {

    const fetchtimeframe = async (event) => {
        const time = event.target.id
        setTimeframe(time)
        changeColor(time)
    };

    const [active, setActive] = useState({
        daily: true,
        weekly: false,
        monthly: false
    });

    const changeColor = (event) => {
        const name = event
        const newValue = (value => {
            if (name === "daily") {
                return {
                    daily: true,
                    weekly: false,
                    monthly: false
                }
            } else if (name === "weekly") {
                return {
                    daily: false,
                    weekly: true,
                    monthly: false
                }
            } else {
                return {
                    daily: false,
                    weekly: false,
                    monthly: true
                }
            }
        })
        setActive(newValue)
    }
    
  return (
      <div className="profile-content">
          <div className="user-details">
              <img src={jeremy} alt="User icon" />
              <div>
                  <p>Report for</p>
                  <h1>Jeremy Robson</h1>
              </div>
          </div>
          <div className="time-selection">
              <p id="daily"
                  onClick={(e) => fetchtimeframe(e)}
                  style={{ color: active.daily ? "white" : " hsl(235, 45%, 61%)" }}
              >Daily</p>
              <p id="weekly"
                  onClick={(e) => fetchtimeframe(e)}
                  style={{ color: active.weekly ? "white" : " hsl(235, 45%, 61%)" }}
              >Weekly</p>
              <p id="monthly"
                  onClick={(e) => fetchtimeframe(e)}
                  style={{ color: active.monthly ? "white" : " hsl(235, 45%, 61%)" }}
              >Monthly</p>
          </div>
      </div>
  )
}

export default Rectangle
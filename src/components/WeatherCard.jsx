import React from 'react'
import { BsArrowUp, BsArrowDown, BsDroplet,BsClouds,BsCloudLightningRain,BsCloudDrizzle,BsCloudHaze2 } from 'react-icons/bs'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiStrongWind } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";

const WeatherCard = ({ data }) => {
    const { name, main, weather, wind } = data;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }
    let cloud = weather && weather[0]?.main.trim().toLowerCase();
  
    return (
        data == undefined ? <h2>Loading...</h2> : <>

            <div className="box-inner">
                <div className="weather-info">
                    <h3 className='city'>{name}</h3>
                    <div className="date-time">
                        <p className="day">{weekday[new Date().getDay()]}</p>
                        <p className="date">{getDate()}</p>
                        <p className="sub-info"><WiStrongWind /> {wind?.speed} km/h</p>
                        <p className="percentage"><BsDroplet /> {main?.humidity} %</p>
                    </div>
                </div>
                <div className="min-max">
                    <span><BsArrowDown className='min' />{(main?.temp_min - 273.15).toFixed(2)}<sup>o</sup></span> &nbsp;
                    <span><BsArrowUp className='min' />{(main?.temp_min - 273.15).toFixed(2)}<sup>o</sup></span>
                </div>
            </div>
            <div className="main-weather">
                <div className="icon-container" >
                   <span className='icon'>
                   {
                   
                        cloud=="clear"?<MdOutlineWbSunny />:
                        cloud=="clouds"?<BsClouds />:
                        cloud=="rain"?<BsCloudLightningRain />:
                        cloud=="drizzle"?<BsCloudDrizzle />:
                        cloud=="haze"?<BsCloudHaze2 />:
                        <TiWeatherPartlySunny />
                    }
                   </span>
                    <span className='cur-weather'>{(main?.temp - 273.15).toFixed(2)}</span>
                    <div className='w-title'>{weather && weather[0]?.description}</div>
                </div>
            </div>

        </>
    )
}

export default WeatherCard

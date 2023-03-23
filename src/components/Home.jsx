import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NotFound from './NotFound';
import WeatherCard from './WeatherCard';

// let api = "https://api.openweathermap.org/data/2.5/weather?q=latur&appid=af913436b4621511e4008446fcc1488e"

const Home = () => {

    const [data,setData]=useState({})
    const [city,setCity]=useState()
    const getData=async(city="pune") =>
    {
       
        try {
            const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af913436b4621511e4008446fcc1488e`);
            setData(res.data);
            console.log(res.data);
        } catch (error) {
       console.log("data not found !!!");
       setData(null)
            
        }
    }
    useEffect(()=>{
        getData(city)
    },[])
    return (
        <>
            <div className='wrapper'>
               <div className="search">
               <h2>True Weather</h2>
                    <input type="search" placeholder='Enter city' onChange={e=>setCity(e.target.value)} value={city} required/><br />
                    <button onClick={()=>getData(city)}>Search</button>
               </div>
               <div className="box">
              { data?<WeatherCard data={data}/>:<NotFound/> }
              </div>
            </div>
        </>
    )
}

export default Home

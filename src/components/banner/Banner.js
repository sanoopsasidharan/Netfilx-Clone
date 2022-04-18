import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl,baseUrl} from'../../constants/Constants';
import axios from '../../axios';
import ('./Banner.css');



function Banner() {
    const [Move, setMove] = useState();
    useEffect(()=>{
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[1]);
            setMove(response.data.results[1]);
        })
    },[])
    return (
      
            <div 
            style={{backgroundImage:`url(${Move ? imageUrl+Move.backdrop_path :''})`}}
            className='banner'>
            <div className='content'>
                <h1 className='titile'>{Move ? Move.title :''}</h1>
                <div className='banner_buttons'>
                    <button className='button'> Play</button>
                    <button className='button'> My list</button>
                </div>
                <h1 className='description'>{Move ? Move.overview : ''}</h1>
            </div>
            <div className='fade_bottom'>

            </div>
        </div>

    );
}

export default Banner;

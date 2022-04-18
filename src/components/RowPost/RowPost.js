import React, { useEffect, useState } from 'react';
import {imageUrl,API_KEY} from'../../constants/Constants'
import YouTube from 'react-youtube';
import axios from '../../axios';
import ('./RowPost.css')

function RowPost({title,issmall,url}) {
  const [subMove , setSubmove ] = useState([]);
  const [urlId, setUrlid] = useState('')
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data)
      setSubmove(response.data.results)
    }).catch((err)=>{
      alert('some error')
    })
  },[])
  const playMove = (id) =>{
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log(response);
       if(response.data.results.length !== 0){
         setUrlid(response.data.results[0])
       }else{
         alert('No items found')
       }
     })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
      <h1>{title}</h1>
     <div className='posters'>
      {subMove.map((obj,index)=>{
        return(
                <img onClick={()=>{playMove(obj.id)}} key={index} src={`${imageUrl+obj.backdrop_path}`} className={issmall ? 'smallposter':'poster'} alt="" />
                );
                 
              })}
      </div>
     {urlId && <YouTube videoId={urlId.key} opts={opts}/> }

       
    </div>
  );
}



export default RowPost;

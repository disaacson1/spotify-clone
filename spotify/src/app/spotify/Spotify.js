'use client'
import React, {useState, useEffect} from "react";
import axios from "axios";

const Spotify = () => {
const [album, setAlbum] = useState()

    const token = 'BQANudvDgkRf-MyEXTVV5AwLnqSypOvd8Aur1zk8oKBtDdM3KNGO8Ec6nQnrIg-HmiOkNfd7sTv5dj7Y9hDBYttr_guOpe6fI-0ASZyZ8aAN2yRImRk'

useEffect(() => {
    axios.get('https://api.spotify.com/v1/albums/689rfQevAx4pvJnuw1MxQO', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(function (response) {
      // handle success
      console.log(response);
      setAlbum(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })   
}, []) 
    

    return (
        <div>
            
            <div> <img  className="pic" src={album?.data?.images?.[0]?.url}></img>     </div>
            <h1><div className="album">{album?.data?.name}</div> </h1>
            <div className="artist">{album?.data?.artists?.[0]?.name}</div> 
            
        </div>
    )
}

export default Spotify;


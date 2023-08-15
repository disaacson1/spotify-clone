'use client'
import React, {useState, useEffect} from "react";
import axios from "axios";
import Album from "./Album";

const Spotify = () => {
const [album, setAlbum] = useState()

    const token = 'BQAQizuc2lMyq1_gxBGHbBbe9aeXLlyODsHwi7Td4JRjoFFs0Agq1y33B9udWYpSg0Vltj4MShoqGDY0o-TONxHdMh9qr0bE7cW9eVvkYrRBWslgqjk'

    
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
            <Album album={album} />
            
        </div>
    )
}

export default Spotify;


'use client'
import React, {useState, useEffect} from "react"
import axios from "axios"
import Spotify from "./Spotify"

const Album = ({Spotify}) => {
const [album, setAlbum] = useState()

// https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5?si=D-tzLJapR1iO1DEerGhybQ
const token = 'BQAQizuc2lMyq1_gxBGHbBbe9aeXLlyODsHwi7Td4JRjoFFs0Agq1y33B9udWYpSg0Vltj4MShoqGDY0o-TONxHdMh9qr0bE7cW9eVvkYrRBWslgqjk'
useEffect(() => {
    axios.get('https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5/albums', {
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
            
            {album.data.items.map((item) => {
                return (
                    <div>
                        <div> <img  className="pic" src={item?.images?.[0]?.url}></img>     </div>
            <h1><div className="album">{item?.name}</div> </h1>
            <div className="artist">{item?.artists?.[0]?.name}</div> 
                    </div>
                )
            })}
        </div>
    )
}

export default Album;
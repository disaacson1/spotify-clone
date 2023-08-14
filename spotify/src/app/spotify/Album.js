// 'use client'
// import React, {useState, useEffect} from "react"
// import Spotify from "./Spotify"

// const Album = ({Spotify}) => {
// const [album, setAlbum] = useState()

// useEffect(() => {
//     axios.get(`'https://api.spotify.com/v1/albums/689rfQevAx4pvJnuw1MxQO'`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       setAlbum(response)
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })   
// }, []) 
//     return (
//         <Album Spotify={Spotify} />
//     )
// }
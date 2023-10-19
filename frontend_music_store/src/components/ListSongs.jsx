import { useEffect, useState } from 'react'

function ListSongs(){
    const URL = "https://music-store-hnrr.onrender.com/api/v1/songs"
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        async function getSongs(){
            const response = await fetch(URL)
            const data = await response.json()
            setSongs(data)
            
        }
        getSongs()
    })





    return (
        <>
            {songs.map((song)=>(

                <h2>{song.name}</h2>
            )
            )}
        
        </>
    )
}

export default ListSongs
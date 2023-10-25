import { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import Song from './Song'

function ListSongs() {
    const URL = "https://music-store-hnrr.onrender.com/api/v1/songs"
    const [songs, setSongs] = useState([])

    useEffect(() => {
        async function getSongs() {
            const response = await fetch(URL)
            const data = await response.json()
            setSongs(data)

        }
        getSongs()
    })

    return (
        <div className='container'>
            <Navbar/>
            <div className='row'>

                {
                    songs.map((song) => {
                        return (
                            <div className="col-md-4" key={song._id}>
                                <Song song={song} />
                            </div>
                        )
                    })
                }


            </div>

        </div>



    )
}

export default ListSongs
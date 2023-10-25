const URL_CREATE_SONG = "https://music-store-hnrr.onrender.com/api/v1/songs"

export async function fetchCreateSong(data){
    try {    
        const res = await fetch(URL_CREATE_SONG, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(data)
        }); 
        const responseServer = await res.json()//leer el json que me enviar el serve en la respuesta
        return responseServer
       
        
    } catch (error) {
        console.log(error)
    }

}
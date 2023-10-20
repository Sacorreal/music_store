export async function Login(data){
try {
    const URL_LOGIN = "https://music-store-hnrr.onrender.com/api/v1/auth/signin"; 
    const res = await fetch(URL_LOGIN, {
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


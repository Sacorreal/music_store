const URL_LOGIN = "https://music-store-hnrr.onrender.com/api/v1/auth/signin"; 
const URL_signUp = "https://music-store-hnrr.onrender.com/api/v1/auth/signup" 

export async function Login(data){
try {    
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

export async function SignUpPost(data){
    try {    
        const res = await fetch(URL_signUp, {
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


import { useForm } from "react-hook-form";
import { fetchCreateSong } from "../utils/createSong";
import Navbar from "./Navbar";

function CreateSong() {
    const { register, handleSubmit } = useForm(); 

    const onSubmit = async (data) => {
        const resLogin = await fetchCreateSong(data);         
        try {
          if(!resLogin.ok){
            alert("No se ha podido crear la canción")
            return
          }
          else{            
            location.href = "/list"      
          }
          
        } catch (error) {
          console.log(error)
        }
        
      }  



  return (
    <div className="container">
      <Navbar />
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Género</label>
          <input type="text" className="form-control" {...register("genre")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Duración</label>
          <input type="text" className="form-control" {...register("duration")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" {...register("price")}/>
        </div>
        <div className="col-md-6">
          <label className="form-label">URL canción</label>
          <input type="text" className="form-control" {...register("url")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">URL cover</label>
          <input type="text" className="form-control" {...register("cover")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Artista</label>
          <input type="text" className="form-control" {...register("strArtist")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Album</label>
          <input type="text" className="form-control" {...register("strAlbum")} />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-outline-success" type="submit">
            Guardar canción
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSong;

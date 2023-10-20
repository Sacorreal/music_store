import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Login } from "../utils/loginPost.js";

function Home() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    const resLogin = await Login(data); 
    console.log(resLogin)
    try {
      if(!resLogin.ok){
        alert("Credenciales invalidas")
        return
      }
      else{
        //guardar token en localStorage
        localStorage.setItem("token", resLogin.token)
        location.href = "/list"      
  
      }
      
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#0000" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://img.freepik.com/foto-gratis/atractiva-joven-escuchando-musica-telefono-celular-traves-auriculares_23-2147861620.jpg?w=360&t=st=1697759202~exp=1697759802~hmac=e1b9802006b92c250b7fea5f5f1ec1152abc04236a338b700af318e986754033"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Iniciar sesión
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg"
                          {...register("email")}
                        />
                        <label className="form-label" >
                          Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-lg"
                          {...register("password")}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        No tienes cuenta?{" "}
                        <Link to="/SignUp" style={{ color: "#393f81" }}>
                          Registrate aquí!
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

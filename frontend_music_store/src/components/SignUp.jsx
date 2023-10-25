import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignUpPost } from "../utils/loginPost";

function SignUp() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    const resLogin = await SignUpPost(data); 
    console.log(resLogin)
    try {
      if(!resLogin.ok){
        alert("Ha ocurrido un error en tu registro")
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
                    src="https://img.freepik.com/foto-gratis/hermosa-mujer-joven-auriculares-escuchando-musica-bailando-pared-amarilla_231208-1693.jpg?w=360&t=st=1697759430~exp=1697760030~hmac=75f7d3f0877e4a7eface786c53ee8c12544a6607c091f0ee421038edc94d3f3b"
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
                        Registrarse
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          {...register("email")}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          {...register("name")}
                        />
                        <label className="form-label" htmlFor="email">
                          Nombre
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          {...register("name")}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Ya tienes cuenta?{" "}
                        <Link to="/" style={{ color: "#393f81" }}>
                          inicia sesión aquí!
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

export default SignUp;

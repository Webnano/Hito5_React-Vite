import { useState } from "react";
import "/src/Formulario.css";
import Swal from "sweetalert2";

const Profile = ({ children, openFormulario, closeRegister }) => {
     
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmpassword, setConfirmPassword] = useState("");
      
        const validacion = (event) => {
          event.preventDefault();
          if (email === "" || password === "" || confirmpassword === "") {
            alert("Email y/o Contraseña no fueron colocados");
            return false;
          }
          if (password !== confirmpassword) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Las Contraseñas no coinciden",
            });
            return;
          }
          if (password.length < 6) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Tu contraseña es muy corta",
            });
          }
          else {
            Swal.fire({
              title: "Bien Hecho",
              text: "Tu cuenta ha sido creada",
              icon: "success"
            });
          }
        };
      
        return (
          <div className={`wrapper modal ${openFormulario ? "is-open" : ""}`}>
            <form action="">
              <h1>Profile</h1>
              <button
                type="button"
                className="modal-close"
                onClick={closeRegister}
              >
                 &times;
              </button>
              <hr></hr>
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <h4 className="text-center pb-3 pt-3">nano.medina@micorreo.cl</h4> 
              </div>
             <hr></hr>
              <button type="submit" className="registro">
                Cerrar Seccion
              </button>
              
            </form>
            {children}
          </div>
        );
      };
      
     

  
  export default Profile;
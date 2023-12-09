import React, { useState } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";


function ContactForm() {
  const [nombreApellido, setNombreApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombreApellido("");
    setEmail("");
    setTelefono("");
    setComentario("");
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <div className="section-form">
              <h1 className="h1-center">Información de contacto</h1>
              <form className="form-container" onSubmit={handleSubmit}>
                <input
                  className="campo-form"
                  name="nombre y apellido"
                  type="text"
                  placeholder="NOMBRE Y APELLIDO"
                  value={nombreApellido}
                  onChange={(e) => setNombreApellido(e.target.value)}
                />
                <br />
                <input
                  className="campo-form"
                  name="email"
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="campo-form"
                  name="telefono"
                  type="text"
                  placeholder="TELEFONO"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <br />
                <label>
                  <textarea
                    name="comentario"
                    className="campo-form"
                    cols="50"
                    rows="1"
                    placeholder="COMENTARIO"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                  ></textarea>
                </label>
                <button className="boton-form" type="submit" value="enviar">
                  ENVIAR
                </button>
              </form>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ContactForm;

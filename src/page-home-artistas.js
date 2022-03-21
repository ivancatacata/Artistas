import React from "react";
import "./page-home-artistas.css";
import logo from "./logo.png";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";
import { Link } from "react-router-dom";
class PageHomeArtista extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/Artistas/busqueda?" + this.state.busqueda);
  };
  state = {
    busqueda: "",
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="logo" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar artista similar
                </button>
                <a
                  className="btng"
                  href="https://ivancatacata.github.io/IvanCatacata/"
                  target="_blank"
                >
                  Volver
                </a>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={true}>
            <h4 class="centrar">
              Las fotos no cargan por un problema con la api, sepan disculpar.
              <img
                src="http://1.bp.blogspot.com/_FUCD-ZQp98g/TD1hkNv9knI/AAAAAAAACDY/gQZWdJh4qwo/s1600/problema_tecnico.jpg"
                alt="problemas tecnicos"
                className="imagen"
              />
            </h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}
export default PageHomeArtista;

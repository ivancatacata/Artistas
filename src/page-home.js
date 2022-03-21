import React from "react";
import "./page-home.css";
import yo from "./yo.jpg";
import logo from "./logo.png";
import { Link } from "react-router-dom";
class PageHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid fondogradient">
          <div className="row centradoH">
            <div className="col-md-12">
              <h2>
                ¡Hola, bienvenidas/os a mi página!, yo soy{" "}
                <strong>Iván Catacata</strong> y quiero agradecerles por tomarse
                el tiempo de entrar.
                <hr />
              </h2>
            </div>
          </div>
          <div className="row centradoH">
            <div className="col-md-5">
              <h3>
                <b>Sobre mi</b>
              </h3>
              <p>
                Nací en enero del 2001, actualmente tengo 20 años. Soy técnico
                en Administración de Empresas y me encuentro cursando la carrera
                de Ingeniería en Sistemas en la Universidad Tecnológica
                Nacional. En mis tiempos de ocio disfruto entrenar, tocar la
                guitarra y aprender cosas nuevas que me llamen la atención o me
                parezcan interesantes, ver series/peliculas y jugar algún
                videojuego.
              </p>
              <img src={yo} alt="yo" className="yo" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 margininfo">
              <div className="fondo">
                <h4>Proyecto de Artistas</h4>
                <p>
                  Este proyecto es una single-app-page, lo realicé en visual
                  studio code, utilizando React, bootstrap y la Api de Last.fm.
                </p>
                <Link to={"/Artistas"}>
                  <img
                    src={logo}
                    alt="logo proyecto"
                    className="logoproyecto iconos"
                  />
                </Link>
                <hr />
                <h4>Tecnologías que uso</h4>
                <p align="justify">
                  Soy un desarrollador web full stack, se empaquetar en html,
                  dar estilos con css, lograr el responsive design con
                  bootstrap, utilizar javascript vanilla o react para lograr que
                  sea una página interactiva, para la base de datos utilizo el
                  back-end como servicio de firebase.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="centradoH conocimientos">
                <b>Mis conocimientos</b>
              </h3>
              <hr />
              <div className="row">
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>CSS</strong>
                  </h4>
                  <i className="fab fa-css3-alt iconos"></i>
                </div>
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>HTML</strong>
                  </h4>
                  <i className="fab fa-html5 iconos"></i>
                </div>
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>Repositorios</strong>
                  </h4>
                  <i className="fab fa-git iconos"></i>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>JavaScript</strong>
                  </h4>
                  <i className="fab fa-js-square iconos"></i>
                </div>
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>ReactJS</strong>
                  </h4>
                  <i className="fab fa-react reactAnim"></i>
                </div>
                <div className="col-md-4 centradoH">
                  <h4>
                    <strong>Firebase</strong>
                  </h4>
                  <i className="fas fa-folder-open iconos"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageHome;

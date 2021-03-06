import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <div className="logo-content">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img id='img-logo' alt=''/>
              </a>{" "}
            </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="http://189.124.207.245:9090" target='blank'>
                  Rastreamento
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#orcamento" className="page-scroll">
                  Orçamento
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

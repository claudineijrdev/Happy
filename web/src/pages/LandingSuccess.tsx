import React from 'react'
import '../styles/pages/landing-success.css'
import { Link } from 'react-router-dom'


function LandingSuccess() {
  return (
    <div id="page-landing-success">
      <div className="content-wrapper">
        <main>
          <h1>Ebaaa! </h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser aprovado. 
            Agora é só esperar :)
          </p>
          <Link to="/app" className="go-back-map" type="button">
            Voltar para o mapa
          </Link>
        </main>
      </div>
    </div>

  );
}

export default LandingSuccess
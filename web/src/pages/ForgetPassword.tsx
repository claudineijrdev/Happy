import React from 'react'
import '../styles/pages/login.css'
import logoImg from '../images/logo-vertical.svg'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

function ForgetPassword() {
     const { goBack } = useHistory()
     return (
          <div id="login-page">
               <div className="content-wrapper">
                    <div className="logo-container">
                         <img src={logoImg} alt="Happy" className="logo" />
                         <div className="location-login">
                              <strong>Itajaí</strong>
                              <span>Santa Catarina</span>
                         </div>
                    </div>
                    <div className="login-form">
                         <button type="button" className="go-back-button" onClick={goBack} >
                              <FiArrowLeft size={24} color="#15C3D6" />
                         </button>
                         <form action="post" className="form-login">
                              <h2>Esqueci a senha</h2>
                              <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
                              <div className="input-block">
                                   <label htmlFor="email">E-mail</label>
                                   <input type="email" id="email" />
                              </div>
                              <div className="input-block">
                                   <button className="do-login-button" type="submit">
                                        Entrar
                                   </button>
                              </div>
                         </form>
                    </div>

               </div>
          </div>
     )
}

export default ForgetPassword
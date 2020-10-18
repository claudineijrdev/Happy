import React, { FormEvent, useEffect, useState } from 'react'
import '../styles/pages/login.css'
import logoImg from '../images/logo-vertical.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../services/api'

interface User {
     id: number,
     name: string,
     email: string,
     token: string
}

function Login() {
     const { goBack, push } = useHistory()
     const [user, setUser] = useState<User>()
     // const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     // const [token, setToken] = useState('')

     async function handleLogin(event: FormEvent) {
          event.preventDefault()

          try{
               const ret = await api.post('auth', {email,password} )
               console.log( ret.data)
               setUser(ret.data)
     
               push('/dashboard',user)
          }catch(err){
               alert('Ops! Não conseguimos autenticar seu acesso')
          }

      
     }
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
                              <h2>Fazer Login</h2>
                              <div className="input-block">
                                   <label htmlFor="email">E-mail</label>
                                   <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                              </div>
                              <div className="input-block">
                                   <label htmlFor="password">Senha</label>
                                   <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                              </div>
                              {/* <div className="checkbox-block-line">
                                   <input type="checkbox" id="remember-me" />
                                   <label htmlFor="remember-me">Lembrar-me</label>
                                   <Link to="/forget" id="forgot-password" type="button">
                                        Esqueci minha senha
                                   </Link>
                              </div> */}
                              <div className="input-block">

                                   <button className="do-login-button" onClick={handleLogin} type="submit">
                                        Entrar
                                   </button>
                              </div>
                         </form>
                    </div>

               </div>
          </div>
     )
}

export default Login
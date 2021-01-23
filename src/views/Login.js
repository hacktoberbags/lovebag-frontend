import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css'
// import { Container } from './styles';

function Login({history}) {
    const [Username, setUsername] = useState('');
    

    function handleSubmit(e){
        e.preventDefault();
        history.push('/main');

    }
  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={logo} className="App-logo" alt="logo"/>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={Username}
                onChange={ e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    </div>

  );
}

export default Login;
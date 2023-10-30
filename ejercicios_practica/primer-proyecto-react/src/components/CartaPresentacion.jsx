import React from 'react'
import './CartaPresentacion.css'
import logo from './logo.svg';

export default function CartaPresentacion() {
  return (
    <div id='presentacion'>
      <h1>Hola! Mi nombre es Julian</h1><br />
      <span>Estoy aprendiendo a programar con <a href="https://inovecode.com/" target='_blank'>Inove</a>, y complete los siguientes cursos:</span><br />
      <div id='logo-lista'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Python inicial</li>
          <li>Programador Python</li>
          <li>Desarrolladore web (html y css)</li>
          <li>Java Script</li>
          <li>Django</li>
        </ul>
      </div><br />
      <p>Mi objetivo es construir un conocimiento solido en programcion back y front-end para poder incorporarlo a mi vida profesional. Poder construir paginas web y aplicaciones que brinden soluciones a problemas grandes y pequeños, incorporar las ventajas que la informatica tiene para ofrecer y poder entender que es lo que esta haciendo y dejar de pensar los programas y aplicaciones como cajas negras.</p>
      
    </div>
  )
}

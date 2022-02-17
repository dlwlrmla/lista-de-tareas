import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"

const Header = ({IsCompletadas, setIsCompletadas}) => {

const toggleCompletada = () => {
  setIsCompletadas(!IsCompletadas)
}

return <div className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      <button className="header__boton" onClick={toggleCompletada}>
              {IsCompletadas ? <p>No mostrar Completadas </p>
              : <p>Mostrar completadas</p>  
            }
              <FontAwesomeIcon icon ={faEyeSlash}
              className="header__icono-boton"
              />
          </button>

  </div>;
};

export default Header;

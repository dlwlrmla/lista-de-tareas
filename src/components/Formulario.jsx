import React, { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4} from "uuid"

const Formulario = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState("")
    const handleSubmit = e =>{
        e.preventDefault()
        setTareas([
            ...tareas,
            {
                id:uuidv4(),
                texto:inputTarea,
                completada:false
            }
        ])
        setInputTarea("")
    }
    const handleInput = e => {
        setInputTarea(e.target.value)
    }

  return <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input type="text" 
      className="formulario-tareas__input"
      placeholder="escribe una tarea" 
      value={inputTarea}
      onChange={(e) => handleInput(e)}
      />

      <button 
      type="submit"
      className="formulario-tareas__boton">
            <FontAwesomeIcon icon={faPlusSquare} 
            className="formualario-tareas__icono-btn"/>
      </button>
  </form>
};

export default Formulario;

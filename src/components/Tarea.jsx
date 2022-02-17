import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faCheckSquare, faEdit, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons"

const Tarea = ({id, texto, completada, toggleCompletada, editarTarea, borrarTarea}) => {

  const [editandoTarea, cambiarEditandoTarea] = useState(false) 
  const [nuevaTarea, cambiarNuevaTarea] = useState(texto)

  const handleSubmit = (e) => {
    e.preventDefault()
    editarTarea(id, nuevaTarea)
    cambiarEditandoTarea(false)
  }

  return <li className = "lista-tareas__tarea"
    
  ><FontAwesomeIcon icon={completada ? faCheckSquare  : faSquare} 
  onClick={() => toggleCompletada(id)}
  className="lista-tareas__icono lista-tareas__icono-check"/>
  <div className="lista-tareas__texto">
    {editandoTarea ? 
    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
      <input 
      type="text"
      className="formulario-editar-tarea__input"
      value={nuevaTarea}
      onChange={(e) => cambiarNuevaTarea(e.target.value)}
      />
      <button type="submit" 
      className="formulario-editar-tarea__btn"
      >Actualizar</button>
    </form>  : <div>{texto}</div>
  }
    </div>
    <div className="lista-tareas__contenedor-botones">
    <FontAwesomeIcon icon={faEdit} 
  className="lista-tareas__icono lista-tareas__icono-accion"
  onClick={() => cambiarEditandoTarea(!editandoTarea)}/>
  <FontAwesomeIcon icon={faTimes} 
  className="lista-tareas__icono lista-tareas__icono-accion"
  onClick={()=> borrarTarea(id)}
  />
    </div>
    
  </li>;
};

export default Tarea;

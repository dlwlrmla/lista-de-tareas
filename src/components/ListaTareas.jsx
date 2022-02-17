import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, setTareas, IsCompletadas}) => {

  const toggleCompletada = id => {
        console.log("estamos editando la tarea con id ", id)
        setTareas(tareas.map((tarea) => {
            if(tarea.id ===id){
                return {...tarea, completada: !tarea.completada}
            }
            return  tarea
        }))
  }
  const borrarTarea = id => {
        setTareas(tareas.filter((tarea) => {
            if(tarea.id !== id){
                return tarea
            }
            return
        }))
  }
  const editarTarea = (id, nuevoTexto) => {
    console.log("estamos editando la tarea con id ", id)
    setTareas(tareas.map((tarea) => {
        if(tarea.id ===id){
            return {...tarea, texto: nuevoTexto}
        }
        return  tarea
    }))
}

  return <ul className="lista-tareas">
      { tareas.length >0 ? 
          tareas.map((tarea)=>( IsCompletadas ?
              <Tarea key={tarea.id} id={tarea.id}
              texto={tarea.texto} completada={tarea.completada}
              toggleCompletada={toggleCompletada}
              editarTarea={editarTarea}
              borrarTarea = {borrarTarea}	/>
          : !tarea.completada ?        <Tarea key={tarea.id} id={tarea.id}
          texto={tarea.texto} completada={tarea.completada}
          toggleCompletada={toggleCompletada}
          editarTarea={editarTarea}
          borrarTarea = {borrarTarea}	/>:null)) : 
          (<div className="lista-tareas__mensaje">
              no hay tareas aun
          </div>)
      }
  </ul>;
};

export default ListaTareas;

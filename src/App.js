import React, {useState, useEffect} from "react"
import './App.css';
import Formulario from './components/Formulario';
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas";


function App() {
  //Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = 
  localStorage.getItem("tareas") ?  
  JSON.parse(localStorage.getItem("tareas")):[]
    //accediendo a localStorage y comprobar que IsCompletadas no es null
    let configIsCompletadas = ""
    if(localStorage.getItem("IsCompletadas") === null){
      configIsCompletadas = true
    }else{
      configIsCompletadas =  localStorage.getItem("IsCompletadas") === "true"
    }
  const [IsCompletadas, setIsCompletadas] = useState(configIsCompletadas)
  //estado de las tareas 
  const [tareas, setTareas] = useState(tareasGuardadas)
//guardando el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  },[tareas])


  //estado de IsCompletadas
  useEffect(()=>{
    localStorage.setItem("IsCompletadas", IsCompletadas.toString())
  },[IsCompletadas])

  return (
    <div className="contenedor">
       <Header 
       setIsCompletadas={setIsCompletadas} 
       IsCompletadas={IsCompletadas}/>
       <Formulario tareas={tareas} setTareas={setTareas} />
       <ListaTareas tareas = {tareas} setTareas={setTareas}
       IsCompletadas = {IsCompletadas}/>
    </div>
  );
}

export default App;

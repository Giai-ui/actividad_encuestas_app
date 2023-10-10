import React from "react";
import "./App.css";
import Encuestas from "./componentes/Encuestas";
function App() {
    const encuestas = [
        {id: 1, pregunta: "¿Cual es tu color favorito?", opciones: ["Rojo", "Azul", "Negro"] },
        {id: 2, pregunta: "¿Cual es tu comida favorita?", opciones: ["Pizza", "Hamburguesas", "Sushi"] },
    ];
    return(
        <div className='App'>
            <h1>Aplicacion de Encuestas</h1>
            <Encuestas encuestas={encuestas}/>
        </div>
    );
}
export default App;
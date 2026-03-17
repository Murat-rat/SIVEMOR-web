import Login from "./pages/Login";
import Evaluacion from "./pages/Evaluacion"; //
import "./App.css"; // Esto es vital para que se vean los colores y formas

function App() {
  return (
    /*
    <div className="aplicacion">
      <Login />
    </div>*/


    <div className="App">
      {/* Por ahora comentamos el Login y ponemos la Evaluacion para verla */}
      <Evaluacion />
    </div>


  );
}

export default App;
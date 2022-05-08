import './App.css';
import {personas} from './data/personas.js';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Reseñas de nuestros clientes:</h1>
      </div>
      <Testimonio
        nombre= {personas[0].nombre}
        pais= {personas[0].pais}
        imagen= {personas[0].imagen}
        cargo= {personas[0].cargo}
        empresa= {personas[0].empresa}
        testimonio= {personas[0].testimonio}/>
      <Testimonio
        nombre= {personas[1].nombre}
        pais= {personas[1].pais}
        imagen= {personas[1].imagen}
        cargo= {personas[1].cargo}
        empresa= {personas[1].empresa}
        testimonio= {personas[1].testimonio}/>
      <Testimonio
        nombre= {personas[2].nombre}
        pais= {personas[2].pais}
        imagen= {personas[2].imagen}
        cargo= {personas[2].cargo}
        empresa= {personas[2].empresa}
        testimonio= {personas[2].testimonio}/>
    </div>
  );
}

export default App;

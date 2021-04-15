import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Saludo from './components/Saludo';
import Comentarios from './components/Comentarios';


function App() {
  return (
    <div className='container mt-5'>
      <h1>Proiecto</h1>
      <Saludo persona='Carlos' edad={30}/>
      <Saludo persona='Juan' edad={18}/>
      <Saludo persona='Rodrigo' edad={44}/>
      <hr/>
      <h3>Caja de comentarios</h3>
      <Comentarios
        urlImagen='https://picsum.photos/64'
        persona='Juan'
        texto='rrrrrrrrrrrrrrrr'
      />
      <Comentarios
        urlImagen='https://picsum.photos/64'
        persona='Rdodrigo'
        texto='gaaaaaaaaaaaaaaaaa'
      />
      <Comentarios
        urlImagen='https://picsum.photos/64'
        persona='Carlos'
        texto='ggdsgdsesggesgdsges'
      />
    </div>
  );
}

export default App;


import './App.css'
import Tarjeta from './Tarjeta';


function App() {

  const titulo = "React";

  // encima del return tenemos PURO código JavaScript

  return (
    <div >
      <h1 style={{ fontSize: '96px', color: 'green' }}>{`Vamos a estudiar: ${titulo}`}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet maxime est, quasi rem impedit in consequuntur numquam eligendi esse ipsum distinctio dolores tempora nemo! Ad sed et aliquid error ipsam.</p>
      <Tarjeta titulo="Gato" descripcion="Miau!!" />
      <Tarjeta titulo="Perro" descripcion="Guau!!" />
      <Tarjeta titulo="Ratón" descripcion="Ghhhghghkggk" />

    </div>
  )
}

export default App;

import './App.css'
import Saludo from './Saludo.jsx'

function App() {

  const nombres = [{nombre:'Esteban',id: 1}, {nombre:'Juan',id: 2}, {nombre:'Pedro',id: 3}]

  return (
    <>
    {
      nombres.map((persona) => (
        <Saludo nombre={persona.nombre} key={persona.id} id={persona.id} />
      ))
    }
    </>
  )
}

export default App

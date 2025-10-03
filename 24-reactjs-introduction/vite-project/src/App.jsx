//importando componentes

import './App.css'
import FirstComponents from './components/FirstComponents'  
import TemplateExpress from './components/TemplateExpress'
import MyComponent from './components/MyComponent'
import Event from './components/Event' // Importando o componente de eventos  

function App() 

{
    return (
    <>
      <div>
        <h1>Fundamentos do React</h1>
      <FirstComponents/>
      <TemplateExpress/>
      <MyComponent />
      <Event/> {/* Componente de eventos */}
      </div>
    </>
  )
}

export default App

import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import PropsExemple from './components/PropsExemple'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <FunctionalComponent/>
      <ClassComponent/>
      <PropsExemple nome="Matheus" idade={10}/>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import Productos from './pages/Productos'
import Clientes from './pages/Clientes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/clientes' element={<Clientes/>}/>
      <Route path='/productos' element={<Productos/>}/>
    </Routes>
  )
}

export default App

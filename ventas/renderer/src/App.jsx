import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import { AppLoader } from './AppLoader'
import Consultar from './pages/Consultar'
import { Recibo } from './pages/Recibo'

function App() {

  return (
    <Routes>
      <Route element={<AppLoader/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/consultar' element={<Consultar/>}/>
        <Route path='/recibo' element={<Recibo/>}/>
      </Route>
    </Routes>
  )
}

export default App

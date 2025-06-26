import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import { AppLoader } from './AppLoader'
import Consultar from './pages/Consultar'
import { Recibo } from './pages/Recibo'
import Numero from './pages/Numero'
import './App.css'



function App() {

  return (
    <Routes>
      <Route element={<AppLoader/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cliente' element={<Clientes/>}/>
        <Route path='/producto' element={<Productos/>}/>
        <Route path='/consultar' element={<Consultar/>}/>
        <Route path='/recibo' element={<Recibo/>}/>
        <Route path='/numero' element={<Numero/>}/>
      </Route>
    </Routes>
  )
}

export default App

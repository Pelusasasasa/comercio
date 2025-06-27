import { Route, Routes } from 'react-router-dom'

import { AppLoader } from './AppLoader'
import { Marca } from './pages/Marca'
import { Recibo } from './pages/Recibo'
import { Usuario } from './pages/Usuario'
import {Clientes} from './pages/Clientes'
import {Consultar} from './pages/Consultar'
import {Home} from './pages/Home'
import {Numero} from './pages/Numero'
import {Productos} from './pages/Productos'

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
        <Route path='/usuario' element={<Usuario/>}/>
        <Route path='/marca' element={<Marca/>}/>
      </Route>
    </Routes>
  )
}

export default App

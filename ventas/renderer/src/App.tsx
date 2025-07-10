import { Route, Routes } from 'react-router-dom'

import { AppLoader } from './AppLoader'
import { Categoria } from './pages/Categoria'
import { Clientes } from './pages/Clientes'
import { Consultar } from './pages/Consultar'
import { Home } from './pages/Home'
import { Marca } from './pages/Marca'
import { Numero } from './pages/Numero'
import { Productos } from './pages/Productos'
import { Recibo } from './pages/Recibo'
import { Remito } from './pages/Remito'
import { Usuario } from './pages/Usuario'
import { Venta } from './pages/Venta'
import ComprobanteA5 from './impresion/ComprobanteA5'
import { Listados } from './pages/Listados'


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
        <Route path='/categoria' element={<Categoria/>}/>
        <Route path='/remito' element={<Remito/>}/>
        <Route path='/venta' element={<Venta/>}/>
        <Route path='/impresion' element={<ComprobanteA5/>}/>
        <Route path='/listado' element={<Listados/>}/>
      </Route>
    </Routes>
  )
}

export default App

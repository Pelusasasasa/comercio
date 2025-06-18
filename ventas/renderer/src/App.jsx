import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import { AppLoader } from './AppLoader'

function App() {

  return (
    <Routes>
      <Route element={<AppLoader/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Route>
    </Routes>
  )
}

export default App

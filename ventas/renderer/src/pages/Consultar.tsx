
import CompensadaList from '../components/consultar/CompensadaList'
import { HeaderConsultar } from '../components/consultar/HeaderConsultar'
import { MovList } from '../components/consultar/MovList'
import { Navbar } from '../components/Navbar'

const Consultar = () => {
  return (
    <div>
        <Navbar text='Consultar Cuenta' />

        <div className='bg-yellow-50'>
          <HeaderConsultar/>
          <CompensadaList/>
          <MovList/>
        </div>
    </div>
  )
}

export default Consultar
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { GoSearch } from "react-icons/go";
import { ListadoProductos } from "../components/producto/ListadoProductos";
import { useProductoStore } from "../hooks/useProductoStore";
import HandleProducto from "../components/producto/handleProducto";
import { Movimientos } from "../components/movimiento/Movimientos";

export const Productos = () => {

  const { productos, startTraerProductos } = useProductoStore();

  const [buttonActive, setButtonActive] = useState('listado');
  const [buscador, setBuscador] = useState('');

  const [listado, setListado] = useState(productos);

  useEffect(() => {
    startTraerProductos()
  }, []);


  useEffect(() => {
    const nuevaLista = productos.filter(elem => {
      const descripcion = elem.descripcion.toUpperCase();
      const codigo = elem.codigo.toUpperCase();
      const provedor = elem.provedor ? elem.provedor?.nombre.toUpperCase() : ''
      const marca = elem.marca ? elem.marca?.nombre.toUpperCase() : ''
      
      return descripcion.includes(buscador.toUpperCase()) || codigo.includes(buscador.toUpperCase()) || marca.includes(buscador.toUpperCase()) || provedor.includes(buscador.toUpperCase());
    });
    setListado(nuevaLista)
  }, [buscador || productos])

  return (
    <div className="">
      <Navbar text={'productos'}/>

      <main className="bg-chocolate h-[calc(100vh-60px)]">

        <div className="flex justify-between mx-5">
          <div className="bg-gray-100 flex gap-2 rounded-sm px-2 py-1 my-3">
            <button onClick={() => setButtonActive('listado')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'listado' ? 'bg-white' : 'text-gray-400'}`}>Listado Productos</button>
            <button onClick={() => setButtonActive('agregar')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'agregar' ? 'bg-white' : 'text-gray-400'}`}>Agregar Producto</button>
            <button onClick={() => setButtonActive('movimiento')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'movimiento' ? 'bg-white' : 'text-gray-400'}`}>Movimiento Historico</button>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex border-gray-300 rounded-sm border gap-2 items-center bg-white px-2">
              <GoSearch color='gray'  />
              <input type="text" placeholder="Buscar Por Descripcion, codigo, marca, provedor" className="p-1 bg-white w-[500px]" onChange={(e) => setBuscador(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="bg-chocolate">
          { buttonActive === 'listado' && (<ListadoProductos setButtonActive={setButtonActive} productos={listado}/>)}
          { buttonActive === 'agregar' && (<HandleProducto setButtonActive={setButtonActive} />)}
          { buttonActive === 'movimiento' && (<Movimientos setButtonActive={setButtonActive} />)}
        </div>
        
      </main>
    </div>
  )
}

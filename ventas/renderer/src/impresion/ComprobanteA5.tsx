import { useEffect, useState } from 'react';
import { ProductoItem } from '../components/impresion/ProductoItem';
import { ClienteFormState } from '../types/cliente';
import { Movimiento } from '../types/movimiento';

interface Props {
    tipoComprobante: 'Comprobante' | 'Remito' | 'Presupuesto';
    total?: number;
    codigoCliente: ClienteFormState;
    movimientos: Movimiento[];
    numeroComprobante: string;
    fecha: string;
    factura: boolean;
};

const initialState: Props = {
    fecha: '',
    codigoCliente: {},
    movimientos: [],
    total: 0,
    numeroComprobante: '',
    factura: false,
    tipoComprobante: 'Presupuesto'
}

const ComprobanteA5 = () => {

    const [venta, setVenta ] = useState(null);

    useEffect(() => {

        window.electronAPI.onRenderComprobante((ventaRecibida) => {
            setVenta(ventaRecibida);
            console.log(ventaRecibida)
        })
    }, []);

    const { fecha, codigoCliente, movimientos, total, numeroComprobante, factura, tipoComprobante} = venta ? venta : initialState;

    const fechaFormateada = fecha ? fecha.slice(0, 10).split('-', 3).reverse().join('/') : '';
    const horaFormateada =  fecha ? fecha.slice(11, 19) : ''
    if(!venta) return(
        <div>
            <p>Impresion Screen</p>
        </div>
    )

  return (
    <section className='px-5'>
        <header className='border-gray-400 border rounded-sm rounded-br-none rounded-bl-none px-5'>
            <div className='grid grid-cols-3 justify-between mb-2'>
                <p className='text-2xl  font-medium'>Electro Avenida</p>

                <p className=''>{numeroComprobante.slice(0,2)}</p>

                <p className=''>N°: {numeroComprobante}</p>
            </div>

            <div className='grid grid-cols-3 justify-between'>
                <p className='text-xs'>De Paccot, Carla</p>
                <p className='text-xs'>{factura ? '' : 'Comprobante no valido como factura'}</p>
                <p className='text-xs'>Cuit: 27-34015023-1</p>
            </div>

            <div className='grid grid-cols-3 justify-between'>
                <p className='text-xs'>Av. Alem 2196 Tel: 3456-593374</p>
                <p className='text-xs'>(3228) - CHAJARI(Entre Rios)</p>
                <p className='text-xs'>Fecha: {fechaFormateada} - {horaFormateada}</p>
            </div>

            <div className='grid grid-cols-3 justify-between'>
                <p className='text-xs'>IVA: Responsable Inscripto</p>
                <p className='text-xs'>{tipoComprobante}</p>
            </div>
        </header>

        <main className='border border-gray-400  px-5'>
            <div className='grid grid-cols-2 mb-2'>
                <p className='text-sm font-medium'>Señor/es: {codigoCliente?.nombre}</p>
                <p className='text-xs'>Codigo: {codigoCliente?.codigo.toString().padStart(4, '0')}</p>
            </div>

            <div className='grid grid-cols-2'>
                <p className='text-xs'>{codigoCliente?.dni.length > 8 ? `C.U.I.T ${codigoCliente?.dni}` : `D.N.I ${codigoCliente?.dni}`}</p>
            </div>

            <div className='grid grid-cols-2'>
                <div>
                    <p className='text-xs'>Domicilio:</p>
                    <p className='text-xs'>{codigoCliente.direccion} - {codigoCliente.localidad}</p>
                </div>
                <p className='text-xs'>
                    Cond I.V.A: {codigoCliente.condicionIva}
                </p>
            </div>
        </main>

        <main className='min-h-[250px]'>
            <table className='w-full'>
                <thead>
                    <tr className='border border-gray-400 rounded-sm rounded-tr-none rounded-tl-none'>
                        <th>Cantidad</th>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Iva %</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {movimientos?.map(elem => (
                        <ProductoItem key={elem._id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </main>

        <main className='border border-gray-400 grid grid-cols-3 p-2 rounded-sm'>
            <p>Subtotal: {}</p>
            <p>Descuento: {}</p>
            <p className='text-xl font-medium'>Total: {total}</p>
        </main>
    </section>
  )
}


export default ComprobanteA5;
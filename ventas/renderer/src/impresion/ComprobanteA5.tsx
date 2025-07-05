import { ClienteFormState } from '../types/cliente';
import { Producto } from '../types/producto';

interface Props {
    tipo: 'Comprobante' | 'Remito' | 'Presupuesto';
    total?: number;
    cliente: ClienteFormState;
    productos: Producto[];
    numeroComprobante: string;
    fecha: string;
    factura: boolean;
};

const ComprobanteA5 = ({fecha, cliente, productos, numeroComprobante = 'RT-0001-00000010', total, factura}: Props) => {
    const fechaFormateada = fecha.slice(0, 10).split('-', 3).reverse().join('/');
    const horaFormateada =  fecha.slice(11, 19)
  return (
    <section>
        <header>
            <div className='grid grid-cols-3'>
                <p>Electro Avenida</p>

                <p>{numeroComprobante.slice(0,2)}</p>

                <p>{numeroComprobante}</p>
            </div>

            <div className='grid gird-cols-3'>
                <p>De Paccot, Carla</p>
                <p>{factura ? '' : 'Comprobante no valido como factura'}</p>
                <p>Cuit: 27-34015023-1</p>
            </div>

            <div>
                <p>Av. Alem 2196 Tel: 3456-593374</p>
                <p>(3228) - CHAJARI(Entre Rios)</p>
                <p>Fecha: {fechaFormateada} - {horaFormateada}</p>
            </div>

            <div>
                <p>IVA: Responsable Inscripto</p>
                <p>Tipo</p>
            </div>
        </header>

        <main>
            <div className='grid grid-cols-2'>
                <p>Señor/es: {cliente.nombre}</p>
                <p>Codigo: {cliente.codigo}</p>
            </div>

            <div>
                {cliente.dni.length > 8 : `C.U.I.T ${}`}
            </div>

        </main>
    </section>
  )
}


export default ComprobanteA5;
import { useEffect, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { Button } from '../Button'

import { useVentaStore } from '../../hooks/useVentaStore'
import { useForm } from '../../hooks/Useform'
import { useRemitoStore } from '../../hooks/useRemitoStore'
import { useUsuarioStore } from '../../hooks/useUsuarioStore'

import { recompilarInfoContado, recompilarInfoCuentaCorriente, recompilarInfoPresupuesto, recompilarInfoRemito } from '../../helpers/recompilarInfoVenta'
import { usePresupuestoStore } from '../../hooks/usePresupuestoStore'
import { useVariableStore } from '../../hooks/useVariableStore'



const initialState = { 
    precio: 0
};

export const BotonesVenta = () => {

    const { startTraerDolar, variableActive } = useVariableStore();
    const { ventaActive, clienteActivo, startReiniciarState, startAgregarVenta } = useVentaStore();
    const { usuarioActive } = useUsuarioStore();
    const { startAgregarRemito } = useRemitoStore();
    const { startAgregarPresupuesto } = usePresupuestoStore();

    const { precio, onInputChange } = useForm(ventaActive ?? initialState)

    const navigate = useNavigate();

    const [tipoVenta, setTipoVenta] = useState<string>('');
    const [impresion, setImpresion] = useState<boolean>(true);
    const [dolar, setDolar] = useState<boolean>(false);

    useEffect(() => {
        startTraerDolar()
    }, []);

    
    const realizarVenta = async() => {
        
        if(!clienteActivo) return await Swal.fire('No se pudo realizar la venta', 'Se necesita de un cliente', 'error');

        if(ventaActive?.productos.length === 0) return await Swal.fire('No se pudo realizar la venta', 'Se necesita de un producto', 'error');
        
        if(tipoVenta === '') return await Swal.fire('No se pudo realizar la venta', 'Se necesita de un tipo de venta', 'error');

        if(tipoVenta === 'remito'){
            const remito =  (ventaActive && clienteActivo && usuarioActive) && recompilarInfoRemito(ventaActive, clienteActivo, usuarioActive);
            const respuesta = remito && await startAgregarRemito(remito);
            // console.log(respuesta)
            // window.electronAPI.imprimirComprobante(respuesta)
        }; 

        if(tipoVenta === 'presupuesto'){
            const presupuesto = (ventaActive && clienteActivo && usuarioActive) && recompilarInfoPresupuesto(ventaActive, clienteActivo, usuarioActive);
            console.log(presupuesto);
            presupuesto && await startAgregarPresupuesto(presupuesto)
        };

        if(tipoVenta === 'contado'){
            const contado = (ventaActive && clienteActivo && usuarioActive) && recompilarInfoContado(ventaActive, clienteActivo, usuarioActive, variableActive?.valor as number ?? 0);
            contado && await startAgregarVenta(contado);
        };

        if(tipoVenta === 'cuentaCorriente'){
            const cuentaCorriente = (ventaActive && clienteActivo && usuarioActive) && recompilarInfoCuentaCorriente(ventaActive, clienteActivo, usuarioActive, variableActive?.valor as number ?? 0);
            console.log(cuentaCorriente);
            // cuentaCorriente && await startAgregarVenta(cuentaCorriente);
        }

        startReiniciarState();
        navigate(-1);
    };

    const cancelarVenta = () => {
        startReiniciarState();
        navigate(-1);
    };


return (
    <main className='rounded-lg border-2 border-[#8B4513] bg-[#E8D4B0] shadow-sm m-2'>
        <div className='p-2'>
            <div className='flex items-center justify-between mb-4'>

                <div className='flex items-center gap-6'>
                    <div className='flex gap-2 items-center'>
                        <label htmlFor="recibo" className='text-sm font-bold text-[#8b4513]'>Recibo</label>
                        <input type="number" name="recibo" id="recibo" className='border w-[150px] border-gray-400 bg-white rounded-lg px-2 py-1' />
                    </div>

                    <div className='flex gap-2'>
                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="presupuesto" onChange={() => setTipoVenta('presupuesto')}/>
                            <label htmlFor="presupuesto" className='text-sm font-bold text-[#8b4513]'>Presupuesto</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="contado" onChange={() => setTipoVenta('contado')}/>
                            <label htmlFor="contado" className='text-sm font-bold text-[#8b4513]'>Contado</label>
                        </div>

                        {
                            clienteActivo?.condicionCuenta === 'CORRIENTE' && (
                                <div className='flex items-center gap-2'>
                                    <input className='scale-125' type="radio" name="tipoComprobante" id="cuentaCorriente" onChange={() => setTipoVenta('cuentaCorriente')}/>
                                    <label htmlFor="cuentaCorriente" className='text-sm font-bold text-[#8b4513]'>Cuenta Corriente</label>
                                </div>
                            )
                        }

                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="remito" onChange={() => setTipoVenta('remito')}/>
                            <label htmlFor="remito" className='text-sm font-bold text-[#8b4513]'>Remito</label>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex gap-2 items-center'>
                        <label htmlFor="precio" className='text-sm font-bold text-[#8B4513]'>Total</label>
                        <input type="number" name="precio" id="precio" value={precio} onChange={onInputChange} className='font-bold border w-[150px] border-gray-400 bg-white rounded-lg px-2 py-1' />
                    </div>

                    <div className='flex gap-2 items-center'>
                        <label htmlFor="porcentaje" className='text-sm font-bold text-[#8B4513]'>Porcentaje</label>
                        <input type="number" name="porcentaje" id="porcentaje" className='w-[70px] border border-gray-400 bg-white rounded-lg px-2 py-1' />
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-between mb-4'>
                <div className='flex gap-5'>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="impresion" id="impresion" onChange={() => setImpresion(!impresion)} checked={impresion} className='border rounded-xl scale-125 cursor-pointer' />
                        <label className='text-sm font-bold text-[#8b4513]' htmlFor="impresion">Impresion</label>
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" name="dolar" id="dolar" onChange={() => setDolar(!dolar)} checked={dolar} className='border rounded-xl scale-125 cursor-pointer' />
                        <label className='text-sm font-bold text-[#8b4513]' htmlFor="dolar">Dolar</label>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <Button type='secondary'  text='Cancelar' click={cancelarVenta} className='h-10 text-xl'/>
                    <Button text='Facturar' click={realizarVenta} className='h-10 text-xl'/>
                </div>
            </div>
        </div>
    </main>
  )
};
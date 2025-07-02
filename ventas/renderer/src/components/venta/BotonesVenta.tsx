import React, { useState } from 'react'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import { useVentaStore } from '../../hooks/useVentaStore'
import { useForm } from '../../hooks/Useform'


const initialState = { 
    precio: 0
}

export const BotonesVenta = () => {

    const { ventaActive } = useVentaStore()

    const { precio, onInputChange } = useForm(ventaActive ?? initialState)

    const navigate = useNavigate();

    const [impresion, setImpresion] = useState<boolean>(true);
    const [dolar, setDolar] = useState<boolean>(false);

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
                            <input className='scale-125' type="radio" name="tipoComprobante" id="presupuesto" />
                            <label htmlFor="presupuesto" className='text-sm font-bold text-[#8b4513]'>Presupuesto</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="contado" />
                            <label htmlFor="contado" className='text-sm font-bold text-[#8b4513]'>Contado</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="cuentaCorriente" />
                            <label htmlFor="cuentaCorriente" className='text-sm font-bold text-[#8b4513]'>Cuenta Corriente</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input className='scale-125' type="radio" name="tipoComprobante" id="remito" />
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
                    <Button type='secondary'  text='Cancelar' click={() =>  navigate(-1)} className='h-10 text-xl'/>
                    <Button text='Facturar' click={() => navigate(-1)} className='h-10 text-xl'/>
                </div>
            </div>
        </div>
    </main>
  )
}

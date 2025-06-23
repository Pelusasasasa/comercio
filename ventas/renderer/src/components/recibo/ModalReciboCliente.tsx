import React from 'react'
import { IoCloseOutline, IoPersonOutline } from 'react-icons/io5'
import { useClienteStore } from '../../hooks/useClienteStore'
import { Button } from '../Button';

export const ModalReciboCliente = ({ setOpenModal }) => {

    const { clienteActive } = useClienteStore();

    const { codigo, nombre, email, telefono, dni, direccion, saldo, condicionIva} = clienteActive || {};

    const saldoStyle = () => {
        if(clienteActive?.saldo ? clienteActive.saldo > 0 : false) return 'text-red-600';
        return 'text-green-600'
    };

  return (
     <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded shadow-md text-center w-xl">
            <div>
                <div className='flex justify-between mb-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <IoPersonOutline className="text-yellow-600 text-xl" />
                        <h3 className='font-medium text-start items-center justify-center'>Detalles del Cliente</h3>
                    </div>
                    <IoCloseOutline size={20} className='text-gray-600 hover:text-gray-800 cursor-pointer hover:border hover:border-gray-500 rounded-sm' onClick={() => setOpenModal(false)}/>
                </div>
                <p className='text-gray-500 text-start'>Informacion completa del cliente seleccionado</p>
            </div>

            <div className='mt-5'>

                <div className='flex justify-start gap-2'>
                    <div className=''>
                        <p className='text-gray-500'>Codigo</p>
                        <p className='font-medium'>{codigo}</p>
                    </div>

                    <div className='m-auto'>
                        <p className='text-gray-500'>DNI</p>
                        <p className='font-medium'>{dni}</p>
                    </div>
                </div>

                <div className='flex flex-col items-start gap-2 mt-4'>
                    <p className='text-gray-500'>Nombre</p>
                    <p className='font-medium'>{nombre}</p>
                </div>

                <div className='flex flex-col items-start gap-2 mt-4'>
                    <p className='text-gray-500'>Direccion</p>
                    <p className='font-medium'>{direccion}</p>
                </div>

               
                <div className='flex justify-start gap-2 mt-4'>
                    <div className=''>
                        <p className='text-gray-500 text-start'>Telefono</p>
                        <p className='font-medium'>{telefono}</p>
                    </div>

                    <div className='m-auto'>
                        <p className='text-gray-500'>Email</p>
                        <p className='font-medium'>{email}</p>
                    </div>
                </div>

                <div className='flex justify-start gap-2 mt-4'>
                    <div className=''>
                        <p className='text-gray-500 text-start'>Condicion Iva</p>
                        <p className='font-medium'>{condicionIva}</p>
                    </div>

                    <div className='m-auto'>
                        <p className='text-gray-500'>saldo</p>
                        <p className={`font-medium ${saldoStyle()}`}>$ {saldo?.toFixed(2)}</p>
                    </div>
                </div>

                <div className='flex justify-end mt-6'>
                    <Button text='Cerrar' click={() => setOpenModal(false)} />
                </div>
            </div>
                
          </div>
        </div>
  )
}

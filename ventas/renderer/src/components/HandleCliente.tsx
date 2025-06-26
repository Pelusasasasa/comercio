 import Swal from 'sweetalert2';
import { useForm } from '../hooks';
import { useClienteStore } from '../hooks/useClienteStore';
import { ClienteFormState } from '../types/cliente';

interface Props {
    setButtonActive: (arg: string) => void
}

const initialFormState: ClienteFormState = {
    _id: '',
    codigo: '',
    nombre: '',
    dni: '',
    telefono: '',
    direccion: '',
    localidad: '',
    email: '',
    condicionCuenta: 'CONTADO',
    condicionIva: 'CONSUMIDOR FINAL',
    observaciones: '',
};

export interface useCliente {
    agregarCliente: (arg: {}) => void,
    clienteActive: ClienteFormState,
    modificarCliente: (arg: {}) => void
}

const HandleCliente = ({setButtonActive}: Props)  => {
    const { agregarCliente, clienteActive, modificarCliente, isSavingCliente } = useClienteStore();
    const {
        codigo,
        nombre,
        dni,
        telefono,
        direccion, 
        localidad, 
        email, 
        condicionCuenta, 
        condicionIva, 
        observaciones, 
        formState, 
        onInputChange, 
        onResetForm
    } = useForm<ClienteFormState>(clienteActive ? clienteActive : initialFormState);
    
    const cargarCliente = async(e) => {
        e.preventDefault();

        if(codigo === '') return await Swal.fire('Falta el codigo', 'Error al cargar cliente', 'error')
        if(nombre === '') return await Swal.fire('Falta el nombre', 'Error al cargar cliente', 'error')

        agregarCliente(formState);

        setButtonActive('listado');
        
    };

    const handlePutCliente = async(e) => {
        modificarCliente(formState);
        setButtonActive('listado');
    };


  return (
    <div className='mx-10 border border-gray-200'>
        <h3 className='text-2xl m-5'>{clienteActive ? 'Modificar Cliente' : 'Agregar Nuevo Cliente'}</h3>
        <form onSubmit={cargarCliente} className=''>
            <div className='grid grid-cols-2 gap-5 py-5 bg-white px-5'>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigo">Codigo *</label>
                    <input onChange={onInputChange} value={codigo} className='border border-gray-200 rounded-sm p-1' placeholder='Codigo' type="number" name="codigo" id="codigo" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="nombre">Nombre *</label>
                    <input onChange={onInputChange} value={nombre} className='border border-gray-200 rounded-sm p-1' placeholder='Nombre' type="text" name="nombre" id="nombre" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="dni">DNI O CUIT</label>
                    <input onChange={onInputChange} value={dni} className='border border-gray-200 rounded-sm p-1' placeholder='DNI' type="text" name="dni" id="dni" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="telefono">Telefono</label>
                    <input onChange={onInputChange} value={telefono} className='border border-gray-200 rounded-sm p-1' placeholder='Telefono' type="tel" name="telefono" id="telefono" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="direccion">Direccion</label>
                    <input onChange={onInputChange} value={direccion} className='border border-gray-200 rounded-sm p-1' placeholder='Direccion' type="text" name="direccion" id="direccion" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="localidad">Localidad</label>
                    <input onChange={onInputChange} value={localidad} className='border border-gray-200 rounded-sm p-1' type="text" placeholder='Localidad' name="localidad" id="localidad" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="email">Email</label>
                    <input onChange={onInputChange} value={email} placeholder='ejemplo@gmail.com.ar' className='border border-gray-200 rounded-sm p-1' type="email" name="email" id="email" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="condicionCuenta">Condicion Cuenta</label>
                    <select onChange={onInputChange} value={condicionCuenta} className='p-1 border border-gray-200 rounded-md' name="condicionCuenta" id="condicionCuenta">
                        <option value="CONTADO">Contado</option>
                        <option value="CORRIENTE">Cuenta Corriente</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="condicionIva">Condicion Iva</label>
                    <select onChange={onInputChange} value={condicionIva} className='p-1 border border-gray-200 rounded-md' name="condicionIva" id="condicionIva">
                        <option value="CONSUMIDOR FINAL">Consumidor Final</option>
                        <option value="MONOTRIBUTO">Monotributo</option>
                        <option value="INSCRIPTO">Inscripto</option>
                        <option value="EXENTO">Exento</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="observaciones">Observaciones</label>
                    <textarea onChange={onInputChange} value={observaciones} className='border border-gray-200 rounded-sm' placeholder='Observaciones' name="observaciones" id="observaciones"></textarea>
                </div>
            </div>

            <div className='flex justify-end p-5 gap-5 bg-white'>
                <button type='button' onClick={() => setButtonActive('listado')} className='border rounded-lg hover:bg-gray-100 cursor-pointer p-2 font-medium bg-white border-gray-200'>Cancelar</button>
                {
                    clienteActive 
                    ? <button type='button' onClick={handlePutCliente} disabled={isSavingCliente} className='cursor-pointer rounded-lg border bg-yellow-500 p-2 font-medium text-white hover:bg-yellow-600'>Modificar Cliente</button>
                    : <button type='submit' disabled={isSavingCliente} className='cursor-pointer rounded-lg border bg-yellow-500 p-2 font-medium text-white hover:bg-yellow-600'>Guardar Cliente</button>
                }
            </div>    
        </form>

        
    </div>
  )
}

export default HandleCliente
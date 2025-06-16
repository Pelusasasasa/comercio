import { useState } from 'react';
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { useUsuarioStore } from '../hooks/useUsuarioStore';

interface usePasswordStore {
    startGetUsuario: (password: string) => boolean;
    usuario: {},
    messageErrro?: String,
    isSaving?: Boolean


}


function PasswordModal({ isOpen, onClose, onValidate }) {

    const { usuario, messageErrro, isSaving, startGetUsuario } = useUsuarioStore();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleValidate = () => {
    const result = startGetUsuario(password);
    
    if (result) {
      onValidate()
      onClose(true); // contraseña correcta
      setPassword('');
      setError('');
      onClose();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      handleValidate();
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="bg-white p-6 rounded shadow-md text-center w-xl">
        <div className='justify-between flex'>
            <h2 className="text-lg font-bold mb-4 flex gap-5 justify-center items-center">
                <IoLockClosedOutline className='text-orange-400' size={20}/>
                Acceso Restringido
            </h2>
            <MdOutlineClose onClick={() => onClose(false)} className='cursor-pointer'/>
            
        </div>
        <input type="password" autoFocus value={password} onKeyDown={handleKeyDown} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-4 text-center rounded-xl focus:border-gray-200" placeholder="Contraseña" />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex  gap-4 justify-end">
          <button onClick={() => onClose(false)} className="bg-gray-300 px-4 rounded-md py-2">Cancelar</button>
          <button onClick={handleValidate} className="bg-yellow-500 px-4 py-2 rounded-md text-white">Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;

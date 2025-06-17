
import { GoArrowLeft, GoDownload } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

interface Props {
    exportar?: () => void;
    text?: string;
}

export const Navbar = ({exportar, text}: Props) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

  return (
    <nav className='flex justify-between items-center bg-black py-3 text-white px-5'>
              <div className='gap-2 flex items-center'>
                <div className='p-2 hover:bg-amber-500 rounded-sm cursor-pointer' onClick={handleBack}>
                  <GoArrowLeft size={20}/>
                </div>
                <p className='text-xl'>{text}</p>
              </div>
    
              {
                exportar && (
                    <div className='flex gap-2 items-center hover:bg-amber-500 rounded-sm cursor-pointer p-2' onClick={exportar}>
                        <GoDownload/>
                        <p>Exportar</p>
                    </div>
                )
              }
          </nav>
  )
}

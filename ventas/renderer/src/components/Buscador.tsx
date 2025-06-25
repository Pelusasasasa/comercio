
import { GoSearch } from 'react-icons/go'
import { Button } from './Button'

interface Props {
    placeHolder: string,
    buttonText: string,
    buscador: string,
    setBuscador: React.Dispatch<React.SetStateAction<string>>;
    modal?: (arg: boolean) => void
    
}

export const Buscador = ({buscador, placeHolder, buttonText, setBuscador, modal}: Props) => {

    const handleClick = () => {
        if(modal){
            modal(true)
        }
    }

  return (
    <div className=" flex gap-2 items-center justify-center">
        <div className="border border-gray-200 rounded-sm flex px-2 items-center justify-center">
            <GoSearch size={20} className="text-gray-500"/>
            <input type="text" name="buscador" placeholder={placeHolder} onChange={(e) => setBuscador(e.target.value)} value={buscador} id="buscador" className="p-2 w-[500px]" />
        </div>
        <div>
            <Button text={buttonText} click={handleClick}/>
        </div>
    </div>
  )
}

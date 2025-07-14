
interface Props {
    type?: 'primary' | 'secondary',
    text: string;
    click: () => void;
    icon?:  React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export const Button = ({text, type, click, icon, disabled, className}: Props) => {
    if(type === 'secondary'){
        return <button type="button" onClick={click} disabled={disabled} className={`w-full  flex gap-2 text-black border border-gray-200 items-center justify-center bg-white  min-h-7 px-3 rounded-md hover:bg-gray-300 cursor-pointer ${className}`}>
          {icon}
          {text}
          </button>    
    }

  return (
    <button disabled={disabled}  onClick={click} className={`w-full  text-white items-center justify-center bg-yellow-600  min-h-7 px-3 rounded-md hover:bg-yellow-700 cursor-pointer ${className}`}>{text}</button>
  )
}

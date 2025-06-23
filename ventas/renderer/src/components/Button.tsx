
interface Props {
    type?: 'primary' | 'secondary',
    text: string,
    click: () => void,
    icon?:  React.ReactNode,
    disabled?: boolean
}

export const Button = ({text, type, click, icon, disabled}: Props) => {
    if(type === 'secondary'){
        return <button onClick={click} disabled={disabled} className='w-full flex  gap-2 text-black border border-gray-200 items-center justify-center bg-white text-xs h-7 px-3 rounded-md hover:bg-gray-300 cursor-pointer'>
          {icon}
          {text}
          </button>    
    }

  return (
    <button disabled={disabled}  onClick={click} className='w-full text-white items-center justify-center bg-yellow-500 text-xs h-7 px-3 rounded-md hover:bg-yellow-600 cursor-pointer'>{text}</button>
  )
}

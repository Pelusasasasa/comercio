
interface Props {
    type?: string,
    text: string,
    click: () => void
}

export const Button = ({text, type, click}: Props) => {
    if(type === 'secondary'){
        return <button onClick={click} className='w-full text-black border border-gray-200 items-center justify-center bg-white text-xs h-7 px-3 rounded-md hover:bg-gray-300 cursor-pointer'>{text}</button>    
    }

  return (
    <button  onClick={click} className='w-full text-white items-center justify-center bg-yellow-500 text-xs h-7 px-3 rounded-md hover:bg-yellow-600 cursor-pointer'>{text}</button>
  )
}

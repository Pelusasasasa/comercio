import { useNavigate } from "react-router-dom"

export const AsideBar = () => {

    const navigate = useNavigate();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-200 bg-gray-100 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 -translate-x-full">
        <div className="flex h-14 items-center border-b border-gray-200 px-14 lg:h-[61px] static">
            <h3 className="text-3xl">Menu</h3>
        </div>
        <nav className="grid gap-1 p-2">
            <button className="text-start pt-1 pl-1 font-medium cursor-pointer" onClick={() => navigate('numero')}><span className="text-xl">Numeros</span></button>
            <button className="text-start pt-1 pl-1 font-medium cursor-pointer" onClick={() => navigate('')}><span className="text-xl">Marca</span></button>
            <button className="text-start pt-1 pl-1 font-medium cursor-pointer" onClick={() => navigate('')}><span className="text-xl">Rubros</span></button>
            <button className="text-start pt-1 pl-1 font-medium cursor-pointer" onClick={() => navigate('')}><span className="text-xl">Cuentas</span></button>
        </nav>
    </aside>
  )
}

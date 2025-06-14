import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  route: string
  icon: React.ReactNode
  title: string,
  setPassWordModal: (arg: Boolean) => void
}

export const CardMenu = ({route, icon, title, setPassWordModal}: Props ) => {
  const navigate = useNavigate()

  const validarUsuario = () => {
    setPassWordModal(true)
  };

  // navigate(route)

  return (
    <div
            onClick={validarUsuario}
            className="cursor-pointer bg-white shadow-md p-8 rounded-lg flex items-center justify-center hover:bg-yellow-100 transition gap-2"
          >
            {icon}
            <span className="text-xl font-semibold text-yellow-600">{title}</span>
        </div>
  )
}

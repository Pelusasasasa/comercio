import React from 'react'

interface Props {
  route: string
  icon: React.ReactNode
  title: string,
  setPassWordModal: (arg: boolean) => void,
  handleClick: (arg: string) => void
}

export const CardMenu = ({route, icon, title, handleClick}: Props ) => {

  return (
    <div
            onClick={() => handleClick(route)}
            className="cursor-pointer bg-white shadow-md p-8 rounded-lg flex items-center justify-center hover:bg-yellow-100 transition gap-2"
          >
            {icon}
            <span className="text-xl font-semibold text-yellow-600">{title}</span>
        </div>
  )
}

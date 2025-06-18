import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useMarcaStore } from './hooks'
import { useProvedorStore } from './hooks/useProvedorStore';

export const AppLoader = () => {

    const { startTraerMarcas } = useMarcaStore();
    const { startTraerProvedores } = useProvedorStore()

    useEffect(() => {
        startTraerMarcas();
        startTraerProvedores()
    }, [])

  return <Outlet/>
}

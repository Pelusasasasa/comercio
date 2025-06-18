import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useMarcaStore } from './hooks'
import { useProvedorStore } from './hooks/useProvedorStore';
import { useCategoriaStore } from './hooks/useCategoriaStore';

export const AppLoader = () => {

    const { startTraerMarcas } = useMarcaStore();
    const { startTraerProvedores } = useProvedorStore();
    const { startTraerCategorias } = useCategoriaStore();

    useEffect(() => {
        startTraerMarcas();
        startTraerProvedores();
        startTraerCategorias();
    }, [])

  return <Outlet/>
}

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useMarcaStore } from './hooks'
import { useProvedorStore } from './hooks/useProvedorStore';
import { useCategoriaStore } from './hooks/useCategoriaStore';
import { useUnidadMedidaStore } from './hooks/useUnidadMedidaStore';

export const AppLoader = () => {

    const { startTraerMarcas } = useMarcaStore();
    const { startTraerProvedores } = useProvedorStore();
    const { startTraerCategorias } = useCategoriaStore();
    const { startTraerUnidadMedidas } = useUnidadMedidaStore();

    useEffect(() => {
        startTraerMarcas();
        startTraerProvedores();
        startTraerCategorias();
        startTraerUnidadMedidas();
    }, []);

  return <Outlet/>
}

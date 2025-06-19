import { useDispatch, useSelector } from "react-redux"
import { Movimiento } from "../types/movimiento"

interface RootState {
    movimiento: {
        movimientos: Movimiento[];
        movimientoActive: Movimiento | null;
        isSavingMovimiento: boolean;
        messageErrorMovimiento: string | null;
    }
}

export const useMovimientoStore = () => {
    const { movimientoActive, movimientos, isSavingMovimiento, messageErrorMovimiento } = useSelector((state: RootState) => state.movimiento)
    const dispatch = useDispatch();


    return {
        //Atributos
        movimientoActive,
        movimientos,
        isSavingMovimiento,
        messageErrorMovimiento,

        //Metodos

    }
}
interface Props {
    costo: number;
    costoDolar: number;
    iva: number;
}


export const obtenerPrecioVenta = ({costo, costoDolar, iva}: Props): number => {

    let precio = 0;
    let dolar = 0;
    let costoDolarPesos = costoDolar * dolar;

    if(costoDolar !== 0){
        precio = (costoDolarPesos + costoDolarPesos * iva / 100)
    }else{
        precio = (costo + costo * iva / 100)
    }

return precio;
};

import { useSelector } from 'react-redux';

export const useClienteStore = () => {

    const { clienteActive, clientes, isSavingCliente, messageErrorCliente } = useSelector(state => state.cliente);

    /*
        Todos
            1.Traer Clientes
            2. Traer Clientes Filtrados
            3. Agregar Cliente
            4. Borrar Cliente
            5. Modificar Cliente

            6. IsSavingCliente
            7. setActiveCliente
    */
        

    return {
        //Atributos
        clienteActive,
        clientes,
        isSavingCliente,
        messageErrorCliente

        //Metodos
    }

};
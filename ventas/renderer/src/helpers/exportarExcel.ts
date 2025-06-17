import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportarClientes = (clientes) => {
    const clienteData = clientes.map( cliente => ({
        Codigo: cliente.codigo,
        Nombre: cliente.nombre,
        Saldo: cliente.saldo,
        Direccion: cliente.direccion,
        Telefono: cliente.telefono,
        Email: cliente.email,
        Cuit: cliente.cuit,
        CondicionIVA: cliente.condicionIva,
        Localidad: cliente.localidad,
        Observaciones: cliente.observaciones,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(clienteData);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Clientes');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: 'application/octet-stream'});

    saveAs(data, 'Clientes.xlsx')
};

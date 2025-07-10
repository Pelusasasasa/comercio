export const toISOStringUTCMinus3 = (fecha: Date): string => {
    const fechaActual = new Date(fecha.getTime() - 3 * 60 * 60 * 1000);
    const año = String(fechaActual.getUTCFullYear());
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`
};

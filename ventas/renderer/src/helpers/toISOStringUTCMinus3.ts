export const toISOStringUTCMinus3 = (fecha: Date): string => {
    const fechaActual = new Date(fecha.getTime() - 3 * 60 * 60 * 1000);
    const año = String(fechaActual.getUTCFullYear());
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`
};

export const trasnsformarHoraMenos3 = (fecha: string): string => {
    const fechaActual = new Date(fecha);
    const año = String(fechaActual.getUTCFullYear());
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const hora = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`
};

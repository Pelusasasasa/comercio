export const formatearFecha = (fecha: string): string => {
    const fechaParseada = fecha.slice(0, 10).split('-').reverse().join('/');
  return `${fechaParseada}`
}

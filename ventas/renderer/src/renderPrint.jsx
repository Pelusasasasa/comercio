import {createRoot} from 'react-dom/client';
import ComprobanteA5 from './impresion/ComprobanteA5';

console.log("a")
window.electronAPI.onRenderComprobante((venta) => {
  const container = document.getElementById('root');

  if (container) {
    createRoot(container).render(<ComprobanteA5 {...venta}/>);
  } else {
    console.error('No se encontró el elemento #root');
  }
});

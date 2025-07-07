const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    imprimirComprobante: (venta) => ipcRenderer.invoke('imprimir-comprobante', venta),
    onRenderComprobante: (callback) => ipcRenderer.on('render-comprobante', (_, venta) => callback(venta))
});
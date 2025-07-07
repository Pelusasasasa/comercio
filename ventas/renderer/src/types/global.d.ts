export {}

declare global {
    interface Window {
        electronAPI: {
            imprimirComprobante: (venta: any) => void
            onRenderComprobante: (venta: any) => void
        }
    }
}
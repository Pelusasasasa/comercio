const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

const crearVentana = () => {
    const ventanaPrincipal = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        }
    });

    ventanaPrincipal.maximize();
    ventanaPrincipal.setMenuBarVisibility(false)

    ventanaPrincipal.loadURL('http://localhost:5173');
};

app.whenReady().then(() => {
    crearVentana();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) crearVentana();
    });
});

ipcMain.handle('imprimir-comprobante', async(e, venta) => {
    console.log(venta)
    const win  = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    await win.loadURL('http://localhost:5173/impresion');
    

    win.webContents.on('did-finish-load', () => {
        console.log(venta)
        win.webContents.send('render-comprobante', venta);
        setTimeout(() => {
            // win.webContents.print({silent: true}, () => win.close());
        }, 1000)
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});0
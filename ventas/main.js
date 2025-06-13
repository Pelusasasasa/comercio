const { app, BrowserWindow} = require('electron');

const crearVentana = () => {
    const ventanaPrincipal = new BrowserWindow();

    ventanaPrincipal.maximize();

    ventanaPrincipal.loadURL('http://localhost:5173');
};

app.whenReady().then(() => {
    crearVentana();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) crearVentana();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})
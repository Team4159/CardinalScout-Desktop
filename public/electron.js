/* eslint-env node*/
//const isDev = (process.env.NODE_ENV === 'development');
const {app, BrowserWindow} = require('electron');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
let win;

function createWindow () {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL('http://localhost:3000');
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log('Added Extension: ', name))
        .catch((err) => console.log('An error occured: ', err ) );
    installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log('Added Extension: ', name))
        .catch((err) => console.log('An error occured: ', err ) );
    win.webContents.openDevTools();
        
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

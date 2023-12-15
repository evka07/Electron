'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');

function main() {
    let mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        frame: false,
        width: 520,
        height: 650,
    });

    mainWindow.loadFile(path.join('app', 'index.html'));
}

app.on('ready', main);

app.on('window-all-closed', function () {
    app.quit();
});
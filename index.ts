import { app, BrowserWindow } from 'electron';

import * as path from 'path';

function createWindow () {
  const indexHTML = path.join(__dirname + '/index.html');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  })

  win.loadFile('index.html')
}


app.whenReady().then(createWindow)



app.on('ready', () => {
  console.log('App is ready');
});


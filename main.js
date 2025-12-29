console.log("hi bella :)")

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    // only takes effect if windowed:
    width: 800,
    height: 600
  })

  win.loadFile('sandwich.html')
}

app.whenReady().then(() => {
  createWindow()

  // open a window if there are none
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// quit app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
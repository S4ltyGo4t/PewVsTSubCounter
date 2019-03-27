const electron = require("electron")
const url = require("url")
const path = require("path")

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

//Set Env 
process.env.NODE_ENV = "production"

let mainWindow;

function createMainWindow() {
    //Create new Window
    mainWindow = new BrowserWindow({
        frame: false
    });
    //Load mainWindow.html
    mainWindow.loadFile("mainWindow.html");


    mainWindow.on("closed", () => {
        mainWindow = null;
        app.quit();
    })
}

app.on("ready", createMainWindow);

//open mainwindow on mac if doc icon is clicked without open instance
app.on("activate", () => {
    if (win === null) {
        createMainWindow();
    }
})
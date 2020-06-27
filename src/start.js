const { app, BrowserWindow, ipcMain, Menu, Tray } = require("electron");

const path = require("path");
const url = require("url");
const os = require("os");

let mainWindow;

function createWindow() {
 BrowserWindow.addDevToolsExtension(
  path.join(
   os.homedir(),
   "/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0"
  )
 );

 mainWindow = new BrowserWindow({
  width: 430,
  height: 100,
  frame: false,
  webPreferences: {
   nodeIntegration: true,
  },
 });

 mainWindow.loadURL(
  process.env.ELECTRON_START_URL ||
   url.format({
    pathname: path.join(__dirname, "/../public/index.html"),
    protocol: "file:",
    slashes: true,
   })
 );

 mainWindow.on("closed", () => {
  mainWindow = null;
 });
}

const installExtensions = async () => {
 const installer = require("electron-devtools-installer");
 const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];
 const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
 for (const name of extensions) {
  try {
   await installer.default(installer[name], forceDownload);
  } catch (e) {
   console.log(`Error installing ${name} extension: ${e.message}`);
  }
 }
};

app.on("ready", async () => {
 await installExtensions();

 return createWindow();
});

app.on("window-all-closed", () => {
 if (process.platform !== "darwin") {
  app.quit();
 }
});

app.on("activate", () => {
 if (mainWindow === null) {
  createWindow();
 }
});

ipcMain.on("asynchronous-message", (event, arg) => {
 console.log(arg); // prints "ping"
 event.reply("asynchronous-reply", "pong");
});

let tray = null;
app.whenReady().then(() => {
 tray = new Tray("./public/tray_icon_light@2x.png");
 //  tray.setTitle("PT");
 //  const contextMenu = Menu.buildFromTemplate([
 //   { label: "Item1", type: "radio" },
 //   { label: "Item2", type: "radio" },
 //   { label: "Item3", type: "radio", checked: true },
 //   { label: "Item4", type: "radio" },
 //  ]);
 tray.setToolTip("Right-click to pause.");
 //  tray.setContextMenu(contextMenu);

 tray.on("click", () => {
  mainWindow.show();
 });

 //  tray.on("double-click", () => {
 //   mainWindow.webContents.send("right-clicked-tray-icon", "whoooooooh!");
 //  });
});

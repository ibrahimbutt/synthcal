const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

if (process.env.ELECTRON_START_URL) {
  require("electron-reload")(__dirname);
}

let window;

const createWindow = () => {
  window = new BrowserWindow({
    width: 240,
    height: 416,
    resizable: false,
    fullscreen: false,
    titleBarStyle: "hidden",
    show: false,
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "./build/index.html"),
      protocol: "file:",
      slashes: true
    });

  window.loadURL(startUrl);

  let bounceID = app.dock.bounce();

  window.on("ready-to-show", function() {
    window.show();
    app.dock.cancelBounce(bounceID);
  });

  window.on("closed", function() {
    window = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (window === null) {
    createWindow();
  }
});

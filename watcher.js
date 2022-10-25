const chokidar = require("chokidar");
const { writeFileSync } = require("fs");

const watcher = chokidar.watch("src/", {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

const refreshFile = async () => {
  const content = `
  <head>
    <meta charset="UTF-8">
    </head>
  <div id="root"></div>
  <script src="./bundle.js"></script>
  <div reload="${Math.random()}"></div>
  `
  writeFileSync("public/index.html", content);
  return Promise.resolve();
};

console.log("[WATCHING CHANGES]");

watcher.on("change", async (path) => {
  console.log(`File ${path} has been changed`);
  await refreshFile();
  console.log("[RELOAD] File has been refreshed");
});

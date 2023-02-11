var AutoUpdater = require('auto-updater');
 
var autoupdater = new AutoUpdater({
  pathToJson: '',
  autoupdate: true,
  checkgit: true,
  jsonhost: 'raw.githubusercontent.com',
  contenthost: 'codeload.github.com',
  progressDebounce: 0,
  devmode: true
});

// State the events
autoupdater.on('git-clone', function() {
    console.log("You have a clone of the repository. Use 'git pull' to be up-to-date");
});

autoupdater.on('check.up-to-date', function(v:any) {
  console.info("You have the latest version: " + v);
});

autoupdater.on('check.out-dated', function(v_old:any, v:any) {
  console.warn("Your version is outdated. " + v_old + " of " + v);
});

autoupdater.on('update.downloaded', function() {
  console.log("Update downloaded and ready for install");
});

autoupdater.on('update.not-installed', function() {
  console.log("The Update was already in your folder! It's read for install");
});

autoupdater.on('update.extracted', function() {
  console.log("Update extracted successfully!");
  console.warn("RESTART THE APP!");
});

autoupdater.on('download.start', function(name:any) {
  console.log("Starting downloading: " + name);
});

autoupdater.on('download.progress', function(name:any, perc:any) {
  process.stdout.write("Downloading " + perc + "");
});

autoupdater.on('download.end', function(name:any) {
  console.log("Downloaded " + name);
});

autoupdater.on('download.error', function(err:any) {
  console.error("Error when downloading: " + err);
});

autoupdater.on('end', function() {
  console.log("The app is ready to function");
});

autoupdater.on('error', function(name:any, e:any) {
  console.error("AutoUpdate Error:\n", name, e);
});

// Start checking
autoupdater.fire('check');
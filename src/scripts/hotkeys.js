console.log('hotkeys2341123123');

chrome.commands.onCommand.addListener(function(command) {
 console.log('Command:', command);
});

// browser.commands.onCommand.addListener(function(command) {
//   if (command == "toggle-feature") {
//     console.log("toggling the feature!");
//   }
// });

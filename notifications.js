var options = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "calhacks.png"
}

function creationCallback() {
}
var time = 0;
chrome.storage.sync.get(['timer'],function(result) {
	time = result.timer;
})

function notificationPopup() {
	chrome.notifications.create(42,options, creationCallback);
}

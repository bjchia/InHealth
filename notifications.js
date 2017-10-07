console.log('test');

var options = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "calhacks.png"
}

console.log("works");

function creationCallback() {
	
}

chrome.notifications.create(options, creationCallback);

console.log("cool");
var options = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "calhacks.png"
}

function creationCallback() {
}

//var timer = $('#myRange')[0].value;

//console.log(timer);

//setInterval(notificationPopup, 3000);

function notificationPopup() {
	chrome.notifications.create(options, creationCallback);
}

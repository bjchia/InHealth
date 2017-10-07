var options = {
	type: "basic",
	title: "My First Popup With Chrome!" , 
 	message: "This is pretty cool!" , 
 	icon: "calhakcs.png"
};

chrome.notifications.create(options, callback);

function callback() {

}
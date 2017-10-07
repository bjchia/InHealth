var options = {
	type: "basic",
	title: "My First Popup With Chrome!" , 
 	message: "This is pretty cool!" , 
 	icon: "calhacks.png"
};

chrome.notifications.create(options, callback);

function callback() {
	console.log('Popup done!');
}
var meditationOptions = {
    type: "basic",
    title: "Meditation",
    message: "Click for a quick meditation video!",
    iconUrl: "calhacks.png"
}

var strengthOptions = {
    type: "basic",
    title: "Strength",
    message: "Click for a quick workout video!",
    iconUrl: "calhacks.png"
}

var stretchOptions = {
    type: "basic",
    title: "Stretch",
    message: "Click for a quick stretch video!",
    iconUrl: "calhacks.png"
}

var cardioOptions = {
    type: "basic",
    title: "Cardio",
    message: "Click for a quick cardio video!",
    iconUrl: "calhacks.png"
}

var type;

function creationCallback() {
}

//where the notification is created
function notificationPopup() {
        if (type === "meditation")
            chrome.notifications.create(meditationOptions, creationCallback);
        else if (type === "strength")
            chrome.notifications.create(strengthOptions,creationCallback());
        else if (type === "stretch")
            chrome.notifications.create(stretchOptions,creationCallback());
        else if (type === "cardio")
            chrome.notifications.create(cardioOptions,creationCallback());

}

//gets the option type
function getType() {
    return type;
}

//sets the option type (mainly used by other js files)
function setType(typeOf) {
    type = typeOf;
    console.log("worked!");
}

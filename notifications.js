var meditationOptions = {
    type: "basic",
    title: "Meditation",
    message: "Click for a meditation video!",
    iconUrl: "calhacks.png"
}

var workoutOptions = {
    type: "basic",
    title: "Workout",
    message: "Click for a workout video!",
    iconUrl: "calhacks.png"
}

var yogaOptions = {
    type: "basic",
    title: "Yoga",
    message: "Click for a yoga video!",
    iconUrl: "calhacks.png"
}

var type;

function creationCallback() {
}

//where the notification is created
function notificationPopup() {
        if (type === "yoga")
            chrome.notifications.create(yogaOptions, creationCallback);
        else if (type === "meditation")
            chrome.notifications.create(meditationOptions,creationCallback());
        else if (type === "workout")
            chrome.notifications.create(workoutOptions,creationCallback());
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

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
var time = 0;

chrome.storage.sync.get(['timer'],function(result) {
    time = result.timer;
});

var type;

chrome.storage.sync.get({optionType: "meditation"}, function(result){
    type = result.optionType;
});

function notificationPopup() {
        if (type === "yoga")
            chrome.notifications.create(yogaOptions, creationCallback);
        else if (type === "meditation")
            chrome.notifications.create(meditationOptions,creationCallback());
        else if (type === "workout")
            chrome.notifications.create(workoutOptions,creationCallback());
}

function getType() {
    return type;
}

function setType(typeOf) {
    type = typeOf;
    console.log("worked!");
}

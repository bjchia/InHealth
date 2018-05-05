var interval;

//creates timer to notification
function setTimer(time) {
        //clears any existing interval
        clearInterval(interval);
        //creates new interval for the notification if the timer is changed
        interval = setInterval(notificationPopup, time * 1000 * 60);
        console.log(time);
}

//when the chrome extension starts up and need to get the pre-existing timer
chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function(result){
        setType(result.optionType);
        setTimer(result.optionTimer);
});


//if any changes are set to the notification
chrome.storage.onChanged.addListener(function(changes) {
    for(key in changes) {
        //if the timer was changed
        if(key == "optionTimer") {
            chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function (result) {
                setType(result.optionType);
                setTimer(result.optionTimer);
            });
        }
        //if the type of option is changed (doesn't reset timer)
        else if (key == "optionType") {
            chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function (result) {
                setType(result.optionType);
            });
        }

    }
});

//if the notification is clicked on and then gets the array of videos based on type
chrome.notifications.onClicked.addListener(function() {
    var random = Math.floor(Math.random() * 1);
    //gets the type of option
    var type = getType();


    if(type === "workout") {
        chrome.tabs.create({url: workoutVideos[random]});
    }

    else if (type === "meditation") {
        chrome.tabs.create({url: meditationVideos[random]});
    }

    else if (type === "yoga") {
        chrome.tabs.create({url: yogaVideos[random]});
    }
});
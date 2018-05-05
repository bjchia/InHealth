var interval;
var timerMain;

var minutes;
var innerMinutes;
var internalCountdown;

//creates timer to notification
function setTimer(time) {
        //clears any existing interval
        clearInterval(interval);
        //creates new interval for the notification if the timer is changed

        //if user wants to disable the timer
        if(time == "disabled") {
            console.log(time);
            console.log("is disabled");
        }
        else {
            minutes = time;
            innerMinutes = 0;
            interval = setInterval(notificationPopup, time * 1000 * 60);
            //internalCountdown = setInterval(countDown,1 * 1000);
            console.log(time);
            timerMain = time;
        }
}


function countDown() {
    innerMinutes += 1;
    if (innerMinutes == minutes) {
        innerMinutes = 0;
    }
    updateSlider(innerMinutes);
    console.log(innerMinutes);
}
//when the chrome extension starts up and need to get the pre-existing timer
chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function(result){
        setType(result.optionType);
        setTime(result.optionTimer);
        setTimer(result.optionTimer);
        console.log("Did this");
});


//if any changes are set to the notification
chrome.storage.onChanged.addListener(function(changes) {
    for(key in changes) {
        //if the timer was changed
        if(key == "optionTimer") {
            chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function (result) {
                setType(result.optionType);
                setTimer(result.optionTimer);
                console.log('setting timer to ' + result.optionTimer);
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


    if(type === "meditation") {
        chrome.tabs.create({url: meditationVideos[random]});
    }

    else if (type === "strength") {
        chrome.tabs.create({url: strengthVideos[random]});
    }

    else if (type === "stretch") {
        chrome.tabs.create({url: stretchVideos[random]});
    }
    else if (type === "cardio") {
        chrome.tabs.create({url: cardioVideos[random]});
    }
});


function getTime() {
    return timerMain;
}

function setTime(time) {
    timerMain = time;
}

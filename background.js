var interval;

function setTimer(time,type) {

    //var likesColor = document.getElementById('like').checked;
    if(time == 0) {
        clearInterval(interval);
        interval = setInterval(notificationPopup, 6000);
    }
    else {
        clearInterval(interval);
        setType(type);
        interval = setInterval(notificationPopup, time * 1000 * 10);
        console.log(time);
    }
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.

//document.addEventListener('DOMContentLoaded', restore_options);

chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function(result){
        setTimer(result.optionTimer, result.optionType);
});


chrome.storage.onChanged.addListener(function() {
    chrome.storage.sync.get({optionTimer: 1, optionType: "meditation"}, function(result){
        setTimer(result.optionTimer, result.optionType);
    });
});

chrome.notifications.onClicked.addListener(function() {
    var random = Math.floor(Math.random() * 3);
    var type = getType();


    // chrome.storage.sync.get({optionType: "meditation"}, function(result){
    //     type = result.optionType;
    //     console.log(result.optionType);
    // });
    if(type === "workout") {
        chrome.tabs.create({url: workoutVideos[random]});
    }

    else if (type === "meditation") {
        chrome.tabs.create({url: meditationVideos[random]});
    }

    else if (type === "yoga") {
        chrome.tabs.create({url: yoga[random]});
    }
});
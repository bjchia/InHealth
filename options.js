// Saves options to chrome.storage

var options = {
    type: "basic",
    title: "Primary Title",
    message: "Primary message to display",
    iconUrl: "calhacks.png"
}

var interval;

function save_options() {
    var time = document.getElementById('timer').value;
    console.log(time);
    //var likesColor = document.getElementById('like').checked;
    if(time == 0) {
        clearInterval(interval);
        interval = setInterval(notificationPopup, 3000);
    }
    else {
        clearInterval(interval);
        interval = setInterval(notificationPopup, time * 1000 * 60);
        console.log(time);
    }
    chrome.storage.sync.set({
        timer: time
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.

//document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
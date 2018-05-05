function save_options() {
    var time = document.getElementById('timer').value;
    //var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
        optionTimer: time
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

chrome.storage.sync.get(['optionTimer'], function(result) {
    console.log(result.optionTimer);
    document.getElementById('timer').value = result.optionTimer;
});

var optionButton = document.querySelectorAll('.btn');


function updateColor() {
    console.log(this.id);
    for(var i = 0; i < optionButton.length; i++) {
        optionButton[i].classList.remove("active");
    }
    this.classList.add("active");

    chrome.storage.sync.set({
        optionType: this.id
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });

}

for(var i = 0; i < optionButton.length; i++) {
    console.log("entered");
    optionButton[i].addEventListener('click', updateColor);
}
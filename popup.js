var optionButton = document.querySelectorAll('.btn-options');

var obj;

//saves the options of the new timer
function save_options() {
    //gets value of dropdown menu
    //var time = $("#slider input[name='slider']")[0].value;
    //console.log(time);
    var time = $('#timer').val();
    updateSlider(time);
    console.log(time);
    //sets the optionTimer to the new time specified by the user
    chrome.storage.sync.set({
        optionTimer: time, optionCountDown: 0
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}


//if the slider changes value
function updateSlider(val) {
    obj.option("value",val);
}

//adds functionality to save button
// document.getElementById('save').addEventListener('click',
//     save_options);

//when the page is loaded up and add active button to the previously saved option type
chrome.storage.sync.get(['optionTimer', 'optionType', 'optionCountDown'], function(result) {
    console.log(result.optionTimer);
    setTime(result.optionTimer);
    document.getElementById(result.optionType).classList.add("active");
    document.getElementById('timer').value = result.optionTimer;
    innerMinutes = result.optionCountDown;
    console.log("this is countdown " + result.optionCountDown);
    updateSlider(result.optionTimer - result.optionCountDown);
});

chrome.storage.onChanged.addListener(function(changes) {
    for(key in changes) {
        //if the timer was changed
        if (key == "optionCountDown") {
            chrome.storage.sync.get({optionTimer: 1, optionType: "meditation", optionCountDown: 1}, function (result) {
                updateSlider(result.optionTimer - result.optionCountDown);
                console.log('setting timer to ' + result.optionTimer);
            });
        }
    }
});


$('#timer').change(function() {
    save_options();
});


//updates the button to have the right active class to the right button when clicking
function updateColor() {
    console.log(this.id);
    //removes all the active classes from the button so none of them are active
    for(var i = 0; i < optionButton.length; i++) {
        optionButton[i].classList.remove("active");
    }
    //sets active class to the button that was just clicked
    this.classList.add("active");

    //sets the new value for optionType based on the button that was clicked
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

//makes a eventListener for each button type
for(var i = 0; i < optionButton.length; i++) {
    console.log("entered");
    optionButton[i].addEventListener('click', updateColor);
}
for(var i = 0; i < optionButton.length; i++) {
    optionButton[i].classList.remove("active");
}

$("#slider").roundSlider(sliderOptions);


obj = $("#slider").data("roundSlider");
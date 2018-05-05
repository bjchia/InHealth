var sliderOptions = {
    radius: 80,
    circleShape: "pie",
    sliderType: "min-range",
    value: 50,
    width: 15,
    handleSize: "25,7",
    min: 0,
    max: 180,
    startAngle: 315,
    change: function (args) {
        save_options();
    }
}

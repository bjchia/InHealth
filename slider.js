var sliderOptions = {
    radius: 80,
    circleShape: "pie",
    sliderType: "min-range",
    value: 50,
    width: 15,
    handleSize: "25,7",
    min: 30,
    max: 120,
    startAngle: 315,
    change: function (args) {
        save_options();
    }
}

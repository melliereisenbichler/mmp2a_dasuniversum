$(window).load(function(){
    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
    var btn = $('#pausebutton');

    var init = function() {
        body.addClass("view-3D")
    };

    $(".set_state").click(function() {
        body.toggleClass("pause_anim");
        btn.toggleClass("playbutton");
    });

    init();

});
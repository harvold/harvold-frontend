$(function() {
    var player = '<div id="player"></div>';
    $("#map").append(player);
    
    $(document).keydown(function(e) {
        
        var position = $("#player").position();

        switch(e.keyCode)
        {
            // left
            case 37:
                $("#player").css('left', position.left - 13.4 + 'px');
                break;
            // up
            case 38:
                $("#player").css('top', position.top - 13.4 + 'px');
                break;
            // right
            case 39:
                $("#player").css('left', position.left + 13.4 + 'px');
                break;
            // down
            case 40:
                $("#player").css('top', position.top + 13.4 + 'px');
                break;
        }
    })
});

$("map").click(function(){
  $("body").css("overflow","hidden");
});
var category,classnum,difficult;
init();

function init() {
	
    //document.onmousemove = mousemove;
}

function mousemove(event) {
    var mouse_x = 0;
    var mouse_y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }

    document.getElementById('smile1').innerHTML = "<img src='/img/smile.png' style='position:absolute;left:" + (mouse_x-25) + "px;top:" + (mouse_y-25) + "px;width:50px;height:50px;'/>";
}

var category, classnum, difficult;

function init() {
	
    //document.onmousemove = mousemove;
}

function reFocus(e,t){
	var fieldIterator = t.id.split("_");
	if(e.key == "Enter"){
		e.preventDefault();
		t.blur();
		fieldIterator[0]= fieldIterator[0] + "_" + (Number(fieldIterator[1]) + 1); 
		document.getElementById(fieldIterator[0]).focus();
	}
}

function startPageSend(){
	field_4.blur();
	document.getElementById('start_page').style='display:none';
	category  = field_1.value;
	classnum  = field_2.value;
	difficult = field_3.value;
	alert(category + ' ' + classnum + ' ' + difficult);
	document.getElementById('construct_test_page').style = 'dispay:block';
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

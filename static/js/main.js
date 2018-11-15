var category, classnum, difficult;



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
	document.getElementById('start_page').classList.remove("visible");
	document.getElementById('start_page').classList.add("hidden");
	category  = field_1.value;
	classnum  = field_2.value;
	difficult = field_3.value;
	document.getElementById('construct_test_page').classList.remove("hidden"); 
	document.getElementById('construct_test_page').classList.add("visible");
	//background:#c0c0c0;

}

/*function mousemove(event) {
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
}*/
var i=0;
var IDDIV;
function newAnswer() {
	var newdiv = document.createElement('div');
    document.getElementById('field').appendChild(newdiv);
    newdiv.classList.add("questionclass");
    newdiv.classList.add("ui-widget");
    newdiv.classList.add("ui-corner-all");
    newdiv.classList.add("ui-draggable");
    newdiv.id=i;
    IDDIV="#"+i;
    document.getElementById(i).style.left="0px";
    document.getElementById(i).style.top="0px";
    newdiv.innerText = prompt("Введите новый текст: ");
    $(".questionclass").resizable();
    $(".questionclass").draggable({containment: "parent"});
    LLL="#"+prompt("Введите цвет:");
    $(IDDIV).css("background-color", LLL);
    i++;
}
var slide=1;
function button_next() {
	confirm("Сохранить изменения?");
	var slide = document.createElement('div');
	document.getElementById('scroll').appendChild(slide);
	slide.classList.add("slide");
	field.innerHTML='';
	slide++;
}
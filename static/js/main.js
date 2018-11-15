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

function newQuestion() {
    document.getElementById('field').classList.remove("visible");
    document.getElementById('field').classList.add("hidden");
    document.getElementById('button_next').classList.remove("visible");
    document.getElementById('button_next').classList.add("hidden");
    document.getElementById('button_save').classList.remove("visible");
    document.getElementById('button_save').classList.add("hidden");
    document.getElementById('scroll').classList.remove("visible");
    document.getElementById('scroll').classList.add("hidden");
    document.getElementById('buttons').classList.remove("visible");
    document.getElementById('buttons').classList.add("hidden");
	document.getElementById('modalQuestion').classList.remove("hidden");
	document.getElementById('modalQuestion').classList.add("visible");
}

function setQuestionSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field').appendChild(newdiv);
    newdiv.classList.add("questionclass");
    newdiv.classList.add("ui-widget");
    newdiv.classList.add("ui-corner-all");
    newdiv.classList.add("ui-draggable");
    newdiv.id="question"+i;
    IDDIV="#question"+i;
    document.getElementById("question"+i).style.left="0px";
    document.getElementById("question"+i).style.top="0px";
    newdiv.innerText = document.getElementById('QuestionText').value;
    $(IDDIV).css("font", document.getElementById('QuestionFontSize').value+"pt "+document.getElementById('QuestionFontType').value);
    $(IDDIV).css("background-color", document.getElementById('QuestionColor').value);
    $(".questionclass").resizable({containment: "parent"});
    $(".questionclass").draggable({containment: "parent"});
    i++;
    reModalBlock();
}
function reModalBlock() {
    document.getElementById('field').classList.remove("hidden");
    document.getElementById('field').classList.add("visible");
    document.getElementById('button_next').classList.remove("hidden");
    document.getElementById('button_next').classList.add("visible");
    document.getElementById('button_save').classList.remove("hidden");
    document.getElementById('button_save').classList.add("visible");
    document.getElementById('scroll').classList.remove("hidden");
    document.getElementById('scroll').classList.add("visible");
    document.getElementById('buttons').classList.remove("hidden");
    document.getElementById('buttons').classList.add("visible");
    document.getElementById('modalQuestion').classList.remove("visible");
    document.getElementById('modalQuestion').classList.add("hidden");
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
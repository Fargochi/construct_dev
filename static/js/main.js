var category, classnum, difficult;
var slideNum = 0;
var IDtoField=0;
var activeSlideID;
var i = 0;
var IDDIV;
var x, y;
var IQ = 0;
var IA = 0;
var divv;

function startPageSend(){
	field_4.blur();
	hideElements(['start_page']);
	category  = field_1.value;
	classnum  = field_2.value;
	difficult = field_3.value;
	switch (category) {
		case 'Тест с выбором ответа':
			showElements(['construct_test_page']);
			$('#construct_test_page').load('html/test.html');
			break;
		case 'Тест-цепочка':
			showElements(['construct_chain_page']);
			$('#construct_chain_page').load('html/chain.html');
			break;
	}
}

function hideElements(names) {
    for (let i=0; i<names.length; i++) {
        document.getElementById(names[i]).classList.remove("visible");
        document.getElementById(names[i]).classList.add("hidden");
    }
}

function showElements(names) {
    for (let i=0; i<names.length; i++) {
        document.getElementById(names[i]).classList.remove("hidden");
        document.getElementById(names[i]).classList.add("visible");
    }
}

function addClasses(el, names){
    for (let i=0; i < names.length; i++) {
        el.classList.add(names[i]);
    }
}

function setBackSettings() {
    $('#field'+IDtoField).css("background-color", document.getElementById('BackColor').value);
    hideElements(['modalBackground']);
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field'+IDtoField]);
    button_back_color(IDtoField);
}

function changeBackground() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalBackground']);
}

function reModalBlock() {
    hideElements(['modalQuestion', 'modalAnswer']);
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
}


function deleteEl(){
	$(".ui-draggable").mouseup(function(){
		x = $(this).position().left;
		y = $(this).position().top;
		//console.log("" + x + " " + y);
		var xdrop = $("#deleteBox").position().left;
		var ydrop = $("#deleteBox").position().top;
		var w = Number(($(this).css("width")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2)) ;
		var h = Number(($(this).css("height")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
		//console.log("" + x + " " + xdrop + " " + (x+w));
		if(x < xdrop && xdrop < x + w && y < ydrop && ydrop < y + h){
      if(confirm("Вы точно хотите удалить?")){
			$(this).remove();
      button_delete_answer(IDtoField, Number(this.id.substr(6)));
    }}
	});
}

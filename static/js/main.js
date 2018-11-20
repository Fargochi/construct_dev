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
function max(a, b){
	if (a >= b)
		return a;
	return b;
}
function min(a, b){
	if (a >= b)
		return b;
	return a;
}
function startPageSend(){
	field_4.blur();
	hideElements(['start_page']);
	category  = field_1.value;
	classnum  = field_2.value;
	difficult = field_3.value;
	switch (category) {
		case 'Тест с выбором ответа':
			showElements(['construct_test_page']);
			//document.getElementById("test_construct").innerHTML = "<script src='/js/test.js'></script>";
			$('#construct_test_page').load('html/test.html');
			break;
		case 'Тест-цепочка':
			showElements(['construct_chain_page']);
			//document.getElementById("chain_construct").innerHTML = "<script src='/js/chain.js'></script>";
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
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
}

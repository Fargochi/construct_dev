var test = []; //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
function button_push_new_question() //при нажатии кнопки "добавить вопрос"
{
    var newquestion = constructor_new_question();
    test.push() = newquestion;
}
function button_push_question(idquestion)//при нажатии подтверждения в форме с вопросом
{
    var newquestion = document.getElementById('QuestionText').value; // получение данных из input вопроса
    test[idquestion].push_question(newquestion);
}
function button_push_answer(idquestion) //при нажатии подтверждения поля с новым ответом, передает номер слайда и номер ответа (?)
{
    var newanswer = document.getElementById('AnswerText').value; 
    var answertrue = document.getElementById('AnswerTrueLi').value;
    test[idquestion].push_answer(newanswer,answertrue);
}
function constructor_new_question() //функция для создания нового вопроса
{
    this.question = "";
    this.answers = [];
    this.push_question = function(newquestion) //задать текст вопроса 
    {
        this.question = newquestion;
    }
    this.push_answer = function(newanswer, answertrue)//добавить вариант ответа и его "правильность"
    {
        var answer = {
            text: newanswer,
            trueorfalse: answertrue
        }
        this.answers.push(answer);
    }
}
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
var x, y;

$(document).ready(function(){
	$(".questionclass").click(function(){
		x = $(".questionclass").offset().position().left;
		y = $(".questionclass").offset().position().top;
		console.log("" + x + " " + y);
		
	});
});


 var IQ=0;
 var IA=0;
  var IDDIV;
  var divv;
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
    newdiv.id="question"+IQ;
    IDDIV="#question"+IQ;
    document.getElementById("question"+IQ).style.left="0px";
    document.getElementById("question"+IQ).style.top="0px";
    newdiv.innerText = document.getElementById('QuestionText').value;
    $(IDDIV).css("font", document.getElementById('QuestionFontSize').value+"pt "+document.getElementById('QuestionFontType').value);
    $(IDDIV).css("color", document.getElementById('QuestionFontColor').value);
   // $(IDDIV).css("z-index", document.getElementById('QuestionZIndex').value);
    $(IDDIV).css("background-color", document.getElementById('QuestionColor').value);
    $(".questionclass").resizable({containment: "parent"});
    $(".questionclass").draggable({containment: "parent"});
    IQ++;
    reModalBlock();
    button_push_question(slideNum);
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
    document.getElementById('modalAnswer').classList.remove("visible");
    document.getElementById('modalAnswer').classList.add("hidden");
   }
   function newAnswer() {
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
    document.getElementById('modalAnswer').classList.remove("hidden");
    document.getElementById('modalAnswer').classList.add("visible");
   }
   function setAnswerSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field').appendChild(newdiv);
    newdiv.classList.add("answerclass");
    newdiv.classList.add("ui-widget");
    newdiv.classList.add("ui-corner-all");
    newdiv.classList.add("ui-draggable");
    newdiv.id="answer"+IA;
    IDDIV="answer"+IA;
    document.getElementById("answer"+IA).style.left="0px";
    document.getElementById("answer"+IA).style.top="0px";
    newdiv.innerText = document.getElementById('QuestionText').value;
    $("#"+IDDIV).css("font", document.getElementById('AnswerFontSize').value+"pt "+document.getElementById('AnswerFontType').value);
    $("#"+IDDIV).css("color", document.getElementById('AnswerFontColor').value);
    //$("#"+IDDIV).css("z-index", document.getElementById('AnswerZIndex').value);
    $("#"+IDDIV).css("background-color", document.getElementById('AnswerColor').value);
    $(".answerclass").resizable({containment: "parent"});
    $(".answerclass").draggable({containment: "parent"});
    IA++;
    if(document.getElementById('AnswerTrueLi').value==1) document.getElementById(IDDIV).classList.add('TrueAnswer');
      else  document.getElementById(IDDIV).classList.add('FalseAnswer');
    reModalBlock();
    button_push_answer(slideNum);
   }
var slideNum=1;
function button_next() {
	confirm("Сохранить изменения?");
	var slide = document.createElement('div');
	slide.id='slide'+slideNum;
	document.getElementById('scroll').appendChild(slide);
	slide.classList.add("slide");
	field.innerHTML='';
	slideNum++;
}
function changeBackground() {
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
    document.getElementById('modalBackground').classList.remove("hidden");
    document.getElementById('modalBackground').classList.add("visible");
}
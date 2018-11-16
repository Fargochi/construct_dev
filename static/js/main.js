var test = []; //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
var firstquestion = new constructor_new_slide();
    test.push(firstquestion); //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
function button_push_new_question() //при нажатии кнопки "добавить вопрос"
{
    var newquestion =  new constructor_new_slide();
    test.push() = newquestion;
}
function button_push_question(idquestion)//при нажатии подтверждения в форме с вопросом
{
    test[Number(idquestion)].push_question();
}
function button_push_answer(idquestion) //при нажатии подтверждения поля с новым ответом, передает номер слайда и номер ответа (?)
{ 
    test[Number(idquestion)].push_answer();
}
function constructor_question_and_answers()
{
    this.Text = "";
    this.FontType = "";
    this.FontSize = "";
    this.FontColor = "";
    this.Color = "";
    this.TrueLi = 0;

}
function constructor_new_slide() //функция для создания нового вопроса
{
    this.question = new constructor_question_and_answers();
    this.answers = [];
    this.push_question = function()
    {
        this.question.Text = document.getElementById('QuestionText').value; 
        this.question.FontType = document.getElementById('QuestionFontType').value;
        this.question.FontSize = document.getElementById('QuestionFontSize').value;
        this.question.FontColor = document.getElementById('QuestionFontColor').value;
        this.question.Color = document.getElementById('QuestionColor').value;

    }
    this.push_answer = function()//добавить вариант ответа и его "правильность"
    {
        var newanswer = new constructor_question_and_answers();
        newanswer.Text = document.getElementById('AnswerText').value; 
        newanswer.TrueLi = document.getElementById('AnswerTrueLi').value;
        newanswer.FontType = document.getElementById('AnswerFontType').value;
        newanswer.FontSize = document.getElementById('AnswerFontSize').value;
        newanswer.FontColor = document.getElementById('AnswerFontColor').value;
        newanswer.Color = document.getElementById('AnswerColor').value;
        this.answers.push(newanswer);
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

var i = 0;
var IDDIV;
var x, y;
var IQ = 0;
var IA = 0;
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
    newdiv.id = "question" + IQ;
    IDDIV = "#question" + IQ;
    document.getElementById("question"+IQ).style.left = "0px";
    document.getElementById("question"+IQ).style.top = "0px";
    newdiv.innerText = document.getElementById('QuestionText').value;
    $(IDDIV).css("font", document.getElementById('QuestionFontSize').value + "pt " + document.getElementById('QuestionFontType').value);
    $(IDDIV).css("color", document.getElementById('QuestionFontColor').value);
	//$(IDDIV).css("z-index", document.getElementById('QuestionZIndex').value);
    $(IDDIV).css("background-color", document.getElementById('QuestionColor').value);
    $(".questionclass").resizable({containment: "parent"});
    $(".questionclass").draggable({containment: "parent"});
    IQ++;
    reModalBlock();
    button_push_question(slideNum);
	questionMove();
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
    newdiv.innerText = document.getElementById('AnswerText').value;
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
var slideNum = 0;
function button_next() {
	confirm("Сохранить изменения?");
	slideNum++;
	var slide = document.createElement('div');
	slide.id='slide'+slideNum;
	document.getElementById('scroll').appendChild(slide);
	slide.classList.add("slide");
	field.innerHTML='';
}
function questionMove(){
	$(".questionclass").mouseup(function(){
		x = $(this).position().left;
		y = $(this).position().top;
		console.log("" + x + " " + y);
		var xdrop = $("#deleteBox").position().left;
		var ydrop = $("#deleteBox").position().top;
		var w = Number(($(this).css("width")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2)) ;
		var h = Number(($(this).css("height")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
		console.log("" + x + " " + xdrop + " " + (x+w));
		if(x < xdrop && xdrop < x + w && y < ydrop && ydrop < y+h)
			$(this).remove();
	});
}
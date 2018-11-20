var test = [];
var number_question=0; var ball =0;//заполняется из данных пользователя скриптом, только текст и правильность
test.push(new constructor_slide);
test[test.length-1].push_question("вопрос1");
test[test.length-1].push_answer("ответ1","0");
test[test.length-1].push_answer("ответ2","1");
function constructor_slide() //слайд теста
{
	this.question = "";
	this.answers = [];
	this.push_question = function(textquestion)
	{
		this.question = textquestion;
	}
	this.push_answer = function(textanswer,truelianswer)
	{
		let answer = {
			Text: textanswer, TrueLi:truelianswer
		}
		this.answers.push(answer);
	}
}
function chekanswer(id) //функция для "отметки" варианта ответа (меняется цвет кнопки и value)
{
	var flag = document.getElementById('')

}
function next()
{ 
	chek();
	setquestion();
}
function chek()
{
	var right = 1; var i;
	var n = test[number_question].answers.length;
	for (i=0;i<n;i++)
	{
		pupilanswer = document.getElementById('answer'+number_question+'_' + i).value; //значение select по id ответа
		if (pupilanswer != test[number_question].answers[i].trueorfalse) {right=0;}
	}
	ball += right;
	number_question++;
}
function setquestion()
{   
	if (number_question == test.length) {finish();}
	else {
	//работа c div "question"
	var newdivquestion = '<div id="question'+ number_question + '">'+ test[number_question].question +'</div>"'
	document.getElementById('question').innerHTML = newdivquestion;
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	for (let i=0;i<test[number_question].answers.length ;i++)
	{ alert(i);
		new_answer = '<div id = "answer'+ number_question + '_' + i + '">'+ test[number_question].answers[i].Text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		
		divanswers.innerHTML += new_answer; //добавление этого div
	}}
}
function finish()
{
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<div>Ваш результат: ' +  ball + 'из' + number_question + '</div>';
	document.getElementById("base").innerHTML = total;
}

function makePB() {
	document.getElementById('progress').innerHTML="<table class='PBmain'><tr id='mainTr'></tr></table>";
	$("#mainTr").css("width", "50%");
	for(let i=0;i<test.length;i++){
		document.getElementById("mainTr").innerHTML="<td class='"+PBpassive+"'></td>";
	}
}
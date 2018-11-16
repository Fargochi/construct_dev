var test[]; //заполняется из данных пользователя скриптом
var number_question = 0;
var ball = 0;
start()
{   
	document.getElementById('base').innerHTML = " ";
	button_next = '<button onClick="next();">Следующий вопрос</button>';
	document.getElementById('nextquestion').innerHTML = button_next;
	setquestion();
}
next()
{ 
	chek();
	setquestion();
}
chek()
{
	var right = 1; var i;
	var n = test[number_question].answers.length;
	for (i=0;i<n;i++)
	{
		pupilanswer = document.getElementById(idselect).value; //значение select по id ответа
		if (pupilanswer != test[number_question].answers[i].trueorfalse) {right=0;}
	}
	ball += right;
	number_question++;
}
setquestion()
{   
	if (number_question = = test.length) {finish();}
	else {
	//работа c div "question"
	var newdivquestion = '<div class="question'+ number_question + '">'+ test[number_question].question +'</div>"'
	document.getElementById('question').innerHTML = newdivquestion;
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	var n = test[number_question].answers.length;
	var i;
	for (i=0;i<n;i++)
	{
		newanswer = '<div class = "answer'+ i + '">'+ test[number_question].answers[i].text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		divanswers.innerHTML += newanswer; //добавление этого div
	}}
}
finish()
{
	document.getElementById("newdivquestion").innerHTML = " ";
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<div>Ваш результат: ' +  ball + 'из' + number_question + '</div>';
	document.getElementById("base").innerHTML = total;
}


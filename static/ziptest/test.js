var test[]; //заполняется из данных пользователя скриптом
var number_question = 0;
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


}
setquestion()
{
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
		newanswer = '<div class = "answer'+ i + '">'+ test[number_question].answers[i].text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР
		divanswers.innerHTML += newanswer; //добавление этого div
	}

}


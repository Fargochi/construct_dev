var test[]; //заполняется из данных пользователя скриптом, только текст и правильность
var number_question = 0;
var ball = 0;
function constructor_slide() //слайд теста
{
	this.text_question = "";
	this.answers[];
}
function consructor_one_answer() //вариант ответа
{
	this.Text = "";
	this.TrueLi = 0;
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
	if (number_question = = test.length) {finish();}
	else {
	//работа c div "question"
	var newdivquestion = '<div id="question'+ number_question + '">'+ test[number_question].question +'</div>"'
	document.getElementById('question').innerHTML = newdivquestion;
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	var n = test[number_question].answers.length;
	var i;
	for (i=0;i<n;i++)
	{
		newanswer = '<div id = "answer'+ number_question + '_' + i + '">'+ test[number_question].answers[i].text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		$
		divanswers.innerHTML += newanswer; //добавление этого div
	}}
}
function finish()
{
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<div>Ваш результат: ' +  ball + 'из' + number_question + '</div>';
	document.getElementById("base").innerHTML = total;
}



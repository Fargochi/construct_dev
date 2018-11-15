var test = []; //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
function button_push_new_question() //при нажатии кнопки "добавить вопрос"
{
	newquestion = constructor_new_question();
	test.push() = newquestion;
}
function button_push_question(idquestion)//при нажатии круглой кнопки с вопросом, передается номер слайда (вопроса в тесте)
{
	var newquestion = document.getElementById(nameidquestion).value; // получение данных из input вопроса
	test[idquestion].push_question(newquestion);
}
function button_push_answer(idquestion,idanswer) //при нажатии круглой кнопки с новым ответом, передает номер слайда и номер ответа (?)
{


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
		answer = {
			text: newanswer;
			trueorfalse: answertrue;
		}
		answers.push(answer);
	}
}




var test = [];
var number_question=0; var ball =0;//заполняется из данных пользователя скриптом, только текст и правильность
var maxball=0;
test.push(new constructor_slide);
test[test.length-1].push_question_and_backcolor("Сколько будет 2*2?","#3deb4c");
test[test.length-1].push_answer("Думаю, 4","1");
test[test.length-1].push_answer("Может, 6?","0");
test[test.length-1].push_answer("Маловероятно, но, быть может, миллион?","0");
test[test.length-1].push_answer("Все знают, то это 15","0");
test.push(new constructor_slide);
test[test.length-1].push_question_and_backcolor("Кто был президентом России?","#3deb4c");
test[test.length-1].push_answer("ВЛАДИМИР ВЛАДИМИРОВИЧ ПУТИН","1");
test[test.length-1].push_answer("Да Медведев тоже вродь","1");
test[test.length-1].push_answer("Ельцин, ящитаю","1");
test[test.length-1].push_answer("Обэма","0");
test.push(new constructor_slide);
test[test.length-1].push_question_and_backcolor("Сколько ног у человека?","#3deb4c");
test[test.length-1].push_answer("Ну 2 же","1");
test[test.length-1].push_answer("У человека-паука 8 точно","0");
test[test.length-1].push_answer("Ник Вуйчич - 0","0");
test[test.length-1].push_answer("Коренной чернобылец - от 0 до 9","0");

function constructor_slide() //слайд теста
{
	this.question = "";
	this.answers = [];
	this.backcolor = "";
	this.push_question_and_backcolor = function(textquestion,colormainfield)
	{
		this.question = textquestion;
		this.backcolor = colormainfield;
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
	let right=2;
	let type = 0;
	for (let i=0;i<test[number_question].answers.length; i++)
	{
		pupilanswer =  $('#answer'+number_question+'_' + i).attr("trueli"); //значение select по id ответа
		if (test[number_question].answers[i].TrueLi==1) {type++;}
		if (pupilanswer != test[number_question].answers[i].TrueLi && right!=0) {right--;}
	}
	if (type == 1) {ball+= Number(right>1); right = 2* Number(right>1);}
	else {ball+=right;}
	maxball+= 1 + Number(type>1);
	if(right==2){$("#TD"+number_question).css("background-color", "green");}
	else if(right==1){$("#TD"+number_question).css("background-color", "yellow");}
	else{$("#TD"+number_question).css("background-color", "red");}
	number_question++;
}
function setquestion()
{   $("#mainfield").css("background-color", test[number_question].backcolor);
	if (number_question == test.length) {finish();}
	else {
	//работа c div "question"
	var newdivquestion = '<div id="question'+ number_question + '">'+ test[number_question].question +'</div>'
	document.getElementById('question').innerHTML = newdivquestion;
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	for (let i=0;i<test[number_question].answers.length ;i++)
	{ 
		new_answer = '<div class="answerClass" id = "answer'+ number_question + '_' + i + '">'+ test[number_question].answers[i].Text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		divanswers.innerHTML += new_answer; //добавление этого div
		$("#answer"+ number_question + "_" + i).attr("trueli","0");
		//document.getElementById("answer"+ number_question + "_" + i).setAttribute("trueli","0");
		$(".answerClass").click(function(){
        if(document.getElementById(this.id).getAttribute("trueli")=="0"){
        			$("#"+this.id).attr("trueli","1");
        			$("#"+this.id).css("box-shadow","0 0 25px #172caf");
        			//box-shadow: 0 0 10px #172caf;
        }
        else
        	{
        			$("#"+this.id).attr("trueli","0");
        			$("#"+this.id).css("box-shadow","0 0 0px #172caf");
        }
})
	}}
}
function finish()
{
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<div>Ваш результат: ' +  ball + ' из ' + maxball + '</div>';
	document.getElementById("base").innerHTML = total;
}

function makePB() {
	document.getElementById('progress').innerHTML="<table height='5%'class='PBmain'><tr id='mainTr'></tr></table>";
	$("#mainTr").css("width", "50%");
	for(let i=0;i<test.length;i++){
		document.getElementById("mainTr").innerHTML+="<td id='TD"+i+"'class='PBpassive TDmain'></td>";
	}

}
var test = [];
var number_question=0; var number_slide=0; var ball =0;//заполняется из данных пользователя скриптом, только текст и правильность
var maxball=0;
var hour =0;
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
function count_maxxball()
{
	for (let i=0;i<test.length;i++)
	{
		let oneor =0;
		for(let j=0;j<test[i].answers.length;j++)
		{
			if (test[i].answers[j].TrueLi==1) {oneor++;}
		}
		maxball+= 1 + Number(oneor>1);
	}
}

function next()
{ 	
	if (number_slide==number_question) {chek();}
	document.getElementById('back_b').classList.remove("hidden");
	document.getElementById('back_b').classList.add("visible");
	number_slide++;
	setquestion();
}
function back()
{	document.getElementById("base").innerHTML = "";
	document.getElementById('next_b').classList.remove("hidden");
	document.getElementById('next_b').classList.add("visible");
	number_slide--;
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
	if(right==2){$("#TD"+number_question).css("background-color", "green"); alert("Абсолютно верно!");}
	else if(right==1){$("#TD"+number_question).css("background-color", "yellow");alert("Частично верно");}
	else{$("#TD"+number_question).css("background-color", "red"); alert("Вы совершили ошибку!");}
	number_question++;
}
function setquestion(){
	document.getElementById("base").innerHTML = "";
	if(number_slide==0) {    

	document.getElementById('back_b').classList.remove("visible");
	document.getElementById('back_b').classList.add("hidden");

	}
	if (number_slide == test.length) {finish();}
	else {
	$("#mainfield").css("background-color", test[number_slide].backcolor);
	//работа c div "question"
	var newdivquestion = '<div id="question'+ number_slide + '">'+ test[number_slide].question +'</div>'
	document.getElementById('question').innerHTML = newdivquestion;
$("#question"+number_slide).fadeOut(0);
$("#question"+number_slide).fadeIn(2000);
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	for (let i=0;i<test[number_slide].answers.length ;i++)
	{ 
		new_answer = '<div class="answerClass" id = "answer'+ number_slide + '_' + i + '">'+ test[number_slide].answers[i].Text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		divanswers.innerHTML += new_answer; //добавление этого div
		if (number_slide==number_question)
		{
		$("#answer"+ number_slide + "_" + i).attr("trueli","0");
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
        	}})
		}
		else
		{
			if(test[number_slide].answers[i].TrueLi == 1)
			{
				$("#answer"+ number_slide + "_" + i).css("box-shadow","0 0 25px #00ff00");
			}
			else
			{
				$("#answer"+ number_slide + "_" + i).css("box-shadow","0 0 25px #ff0000");
			}
		}
	}}

	for(let i=0; i<test[number_slide].answers.length; i++){
$("#answer"+number_slide+"_"+i).fadeOut(0);
$("#answer"+number_slide+"_"+i).fadeIn(1500);
	}
}
function finish()
{
	number_slide=test.length;
	count_maxxball();
	document.getElementById('next_b').classList.remove("visible");
	document.getElementById('next_b').classList.add("hidden");
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<br><br><br><br><div><h1><b>Ваш результат: ' +  ball + ' из ' + maxball + '</b></h1></div>';
	document.getElementById("base").innerHTML = total;
}

function makePB() {
	document.getElementById('progress').innerHTML="<table height='5%'class='PBmain'><tr id='mainTr'></tr></table>";
	$("#mainTr").css("width", "50%");
	for(let i=0;i<test.length;i++){
		document.getElementById("mainTr").innerHTML+="<td id='TD"+i+"'class='PBpassive TDmain'></td>";
	}

}
function createtimer(){
	while (min>=60)
	{
		hour++; min -= 60;
	}
	setInterval(function(){

		sec--;
		if (sec<0) {sec=59; min--;}
		if (min<0) {min=59; hour--;}
		if(hour>-1){document.getElementById("timeleft").innerHTML=hour+" ч "+min+"  мин. "+sec+" сек.";}
		if(hour==-1 && sec==59)
		{
			number_question = test.length;
			finish();
		}


	},1000)

}
function start()
{
	if(sec + min + hour==0)
	{
		setquestion();
	}
	else
	{
		let startpage = "<button onclick = 'createtimer(); setquestion();'>Начать тест!</button>";
		document.getElementById("base").innerHTML = startpage;
	}
}
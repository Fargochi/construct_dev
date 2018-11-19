var test = []; //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
var firstquestion = new constructor_new_slide();
    test.push(firstquestion); //глобальный массив вопросов ответов (пока только текстовая информация, без графических характеристик)
function button_push_new_question() //при нажатии кнопки "добавить вопрос"
{
    var newquestion =  new constructor_new_slide();
    test.push(newquestion);
}
function button_push_question(idquestion)//при нажатии подтверждения в форме с вопросом
{
    test[Number(idquestion)].push_question();
}
function button_push_answer(idquestion) //при нажатии подтверждения поля с новым ответом, передает номер слайда и номер ответа (?)
{
    test[Number(idquestion)].push_answer();
}
function button_back_color(idquestion)
{
  test[Number(idquestion)].Back_Color = document.getElementById('BackColor').value;
}
function button_save_changes()
{
    for (let i=0; i<test.length; i++)
    {
        test[i].question.Left = $("#question"+i).css("left");
        test[i].question.Top = $("#question"+i).css("top");
        test[i].question.Width = $("#question"+i).css("width");
        test[i].question.Height = $("#question"+i).css("height");
        for (let j=0; j<test[i].answers.length; j++)
        {
            test[i].answers[j].Left =  $("#answer"+i+"_"+j).css("left");
            test[i].answers[j].Top =  $("#answer"+i+"_"+j).css("top");
            test[i].answers[j].Width =  $("#answer"+i+"_"+j).css("width");
            test[i].answers[j].Height =  $("#answer"+i+"_"+j).css("height");
        }
    }
}
function constructor_question_and_answers()
{
    this.Text = "";
    this.FontType = "";
    this.FontSize = "";
    this.FontColor = "";
    this.Color = "";
    this.TrueLi = 0;
    this.Left  = 0;
    this.Top = 0;
    this.Width = 0;
    this.Height = 0;

}
function constructor_new_slide() //функция для создания нового вопроса
{
    this.question = new constructor_question_and_answers();
    this.answers = [];
    this.Back_Color = "#ffffff";
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
var getdata = "";
function createjs() //генерация js кода приложения
{   
    getdata = 'var newslide= new constructor_slide; var newanswer = new constructor_one_answer;\n';
    for (let i=0; i<test.length; i++)
    {
        var get_question = 'newslide.text_question = "' + test[i].question.Text + '";\n' ;
        var get_answers = "";
        for (let j=0; j < test[i].answers.length; j++)
        {
            get_answers += 'newanswer.Text = "' + test[i].answers[j].Text + '";\n newanswer.TrueLi =' + test[i].answers[j].TrueLi + '; newslide.answers.push(newanswer);\n';
        }
        getdata += get_question + get_answers + 'test.push(newslide);\n';
    }
}
var getdatacss = "";
function createcss() //генерация css стилей приложения
{   getdatacss = "";
    for (let i=0; i < test.length; i++)
    {   let get_style_question = "";
        get_style_question += '#question' + i + '{\nfont: '+ test[i].question.FontType + ' '+ test[i].question.FontSize + ';\n';
        get_style_question += 'color: '+ test[i].question.FontColor + ';\n' ;
        get_style_question += 'background-color: '+ test[i].question.Color +';\n';
        get_style_question += 'left: '+ test[i].question.Left +';\n';
        get_style_question += 'top: '+ test[i].question.Top +';\n';
        get_style_question += 'width: '+ test[i].question.Width +';\n';
        get_style_question += 'height: '+ test[i].question.Height +';}';
        getdatacss += get_style_question + '\n';
        for (let j=0; j<test[i].answers.length; j++)
        {
            let get_style_answer = "";
            get_style_answer += '#answer' + i + '_' + j + '{\nfont: '+ test[i].answers[j].FontType + ' '+ test[i].answers[j].FontSize + ';' + '\n';
            get_style_answer += 'color: '+ test[i].answers[j].FontColor +  ';\n';
            get_style_answer += 'background-color: '+ test[i].answers[j].Color +  ';\n';
            get_style_answer += 'left: '+ test[i].answers[j].Left +  ';\n';
            get_style_answer += 'top: '+ test[i].answers[j].Top +  ';\n';
            get_style_answer += 'width: '+ test[i].answers[j].Width +  ';\n';
            get_style_answer += 'height: '+ test[i].answers[j].Height +  ';\n';
            getdatacss += get_style_answer;
        }
    }
}
/////////////////////////////////////////////////////////////////////

function newQuestion() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalQuestion']);
}

function newAnswer() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalAnswer']);
}

function setQuestionSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newdiv);
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
    button_push_question(IDtoField);
    deleteEl();
}

function setAnswerSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newdiv);
    newdiv.classList.add("answerclass");
    newdiv.classList.add("ui-widget");
    newdiv.classList.add("ui-corner-all");
    newdiv.classList.add("ui-draggable");
    newdiv.id = "answer" + IDtoField+"_"+test[IDtoField].answers.length;
    IDDIV ="answer" + IDtoField+"_"+test[IDtoField].answers.length;
    document.getElementById("answer"+IDtoField+"_"+test[IDtoField].answers.length).style.left = "0px";
    document.getElementById("answer"+IDtoField+"_"+test[IDtoField].answers.length).style.top = "0px";
    newdiv.innerText = document.getElementById('AnswerText').value;
    $("#"+IDDIV).css("font", document.getElementById('AnswerFontSize').value + "pt " + document.getElementById('AnswerFontType').value);
    $("#"+IDDIV).css("color", document.getElementById('AnswerFontColor').value);
    //$("#"+IDDIV).css("z-index", document.getElementById('AnswerZIndex').value);
    $("#"+IDDIV).css("background-color", document.getElementById('AnswerColor').value);
    $(".answerclass").resizable({containment: "parent"});
    $(".answerclass").draggable({containment: "parent"});
    IA++;
    if(document.getElementById('AnswerTrueLi').value == 1)
        document.getElementById(IDDIV).classList.add('TrueAnswer');
    else
        document.getElementById(IDDIV).classList.add('FalseAnswer');
    reModalBlock();
    button_push_answer(IDtoField);
    deleteEl();
}

function reModalBlock() {
    hideElements(['modalQuestion', 'modalAnswer']);
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
}

function button_next() {
	confirm("Сохранить изменения?");//проработать этот момент про сохранения
	slideNum++;
	var slide = document.createElement('div');
	slide.id = 'slide' + slideNum;
	document.getElementById('scroll').appendChild(slide);
	slide.classList.add("slide");
	slide.classList.add('slideActive');
	activeSlideID = 'slide' + slideNum;
	for(var i = 0; i < slideNum; i++){
		document.getElementById('slide' + i).classList.remove('slideActive');
		document.getElementById('slide' + i).classList.add('slidePassive');
		hideElements(['field' + i]);
	}
	hideElements(['field' + (slideNum - 1)]);
	var newField = document.createElement('div');
	document.getElementById('field').appendChild(newField);
	newField.classList.add('fieldVloj');
	newField.classList.add('visible');
	newField.id = 'field' + slideNum;
	IDtoField = slideNum;
	$(".slide").click(function(){
		document.getElementById(activeSlideID).classList.remove('slideActive');
		document.getElementById(activeSlideID).classList.add('slidePassive');
		document.getElementById(this.id).classList.remove('slidePassive');
		document.getElementById(this.id).classList.add('slideActive');
		activeSlideID = this.id;
		IDtoField = Number(activeSlideID.substr(5));
		for(var t = 0; t <= slideNum; t++){
			hideElements(['field' + t]);
		}
		showElements(['field' + IDtoField]);
	});
}

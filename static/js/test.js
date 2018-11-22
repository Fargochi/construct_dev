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
function button_delete_answer(idquestion,idanswer)
{
    test[idquestion].answers.splice(idanswer,1);
    let mojnoda = 0;
    for(let i=0; i<test[idquestion].answers.length; i++){
        if(i==idanswer) {mojnoda = 1;}
        if(mojnoda==1){document.getElementById('answer'+idquestion+"_"+(i+1)).id="answer"+idquestion+"_"+i;}
    }
}
function button_delete_question(idquestion)
{
    test[idquestion].question.Text = "";
}
function Tbutton_save_changes()
{
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['Tend']);
    for (let i=0; i<test.length; i++)
    {
        test[i].question.Left = 100*Number($("#question"+i).css("left").slice(0, -2))/Number($("#field").css("width").slice(0, -2)) + "%";
        test[i].question.Top = 100*Number($("#question"+i).css("top").slice(0, -2))/Number($("#field").css("height").slice(0, -2)) + "%";
        test[i].question.Width = 100*Number($("#question"+i).css("width").slice(0, -2))/Number($("#field").css("width").slice(0, -2)) + "%";
        test[i].question.Height = 100*Number($("#question"+i).css("height").slice(0, -2))/Number($("#field").css("height").slice(0, -2)) + "%";
        for (let j=0; j<test[i].answers.length; j++)
        {
            test[i].answers[j].Left = 100*Number($("#answer"+i+"_"+j).css("left").slice(0, -2))/Number($("#field").css("width").slice(0, -2)) + "%";
            test[i].answers[j].Top =  100*Number($("#answer"+i+"_"+j).css("top").slice(0, -2))/Number($("#field").css("height").slice(0, -2)) + "%";
            test[i].answers[j].Width =  100*Number($("#answer"+i+"_"+j).css("width").slice(0, -2))/Number($("#field").css("width").slice(0, -2)) + "%";
            test[i].answers[j].Height =  100*Number($("#answer"+i+"_"+j).css("height").slice(0, -2))/Number($("#field").css("height").slice(0, -2)) + "%";
        }
    }
    createcss(); 
    createjs();
    document.getElementById('toJS').value = getdata;
    document.getElementById('toCSS').value = getdatacss;
}
function constructor_question_and_answers()
{
    this.Text = "";
    this.FontType = "";
    this.FontSize = "";
    this.FontColor = "";
    this.Color = "";
    this.TrueLi = 0;
    this.Left  = "";
    this.Top = "";
    this.Width = "";
    this.Height = "";

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
    for (let i=0; i<test.length; i++)
    {
        var get_question = 'test[test.length-1].push_question_and_backcolor("' + test[i].question.Text + '","'+ test[i].Back_Color + '");\n' ;
        var get_answers = "";
        for (let j=0; j < test[i].answers.length; j++)
        {
            get_answers += 'test[test.length-1].push_answer("' + test[i].answers[j].Text + '","' + test[i].answers[j].TrueLi + '");\n';
        }
        getdata += 'test.push(new constructor_slide);\n'+get_question + get_answers;
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
        get_style_question += 'position:absolute; \n border-radius: 10px;\n ';
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
            get_style_answer += 'position:absolute; \n  border-radius: 10px;\n';
            get_style_answer += 'height: '+ test[i].answers[j].Height +  ';}\n';
            getdatacss += get_style_answer;
        }
    }
}
/////////////////////////////////////////////////////////////////////

function newQuestion() {
    if(test[IDtoField].question.Text!=""){alert("Сначала удалите старый вопрос!");} else {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalQuestion']);
}
}

function newAnswer() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalAnswer']);
}
var IDMINIDIV;
function setQuestionSettings() {
    if(document.getElementById('QuestionText').value!=""){
    let newdiv = document.createElement('div');
        let newminidiv = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newdiv);
        document.getElementById('slide' + IDtoField).appendChild(newminidiv);
    addClasses(newdiv, ["questionclass", "ui-widget", "ui-corner-all", "ui-draggable"])
    newdiv.id = "question" + IDtoField;
    IDDIV = "#question" + IDtoField;
        newminidiv.id = "miniature" + IDtoField;
        IDMINIDIV = "#miniature" + IDtoField;
    document.getElementById("question"+IDtoField).style.left = "0px";
    document.getElementById("question"+IDtoField).style.top = "0px";
    document.getElementById("miniature"+IDtoField).style.left = "0px";
    document.getElementById("miniature"+IDtoField).style.top = "0px";
    newdiv.innerText = document.getElementById('QuestionText').value;
    $(IDDIV).css("font", document.getElementById('QuestionFontSize').value + "pt " + document.getElementById('QuestionFontType').value);
    $(IDDIV).css("color", document.getElementById('QuestionFontColor').value);
    //$(IDDIV).css("z-index", document.getElementById('QuestionZIndex').value);
    $(IDDIV).css("background-color", document.getElementById('QuestionColor').value);
        $(IDMINIDIV).css("background-color", document.getElementById('QuestionColor').value);
    $(".questionclass").resizable({containment: "parent"});
    $(".questionclass").draggable({containment: "parent"});
    hideElements(['modalQuestion', 'modalAnswer']);
    reModalBlock();
    button_push_question(IDtoField);
    deleteElQuestion();
}
else alert('Вопрос не может быть пустым')
}

function setAnswerSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newdiv);
    addClasses(newdiv, ["answerclass", "ui-widget", "ui-corner-all", "ui-draggable"])
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
    if(document.getElementById('AnswerTrueLi').value == 1)
        document.getElementById(IDDIV).classList.add('TrueAnswer');
    else
        document.getElementById(IDDIV).classList.add('FalseAnswer');
    hideElements(['modalQuestion', 'modalAnswer']);
    reModalBlock();
    button_push_answer(IDtoField);
    deleteElAnswer();
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
function deleteElAnswer(){
    $(".ui-draggable").mouseup(function(){
        x = $(this).position().left;
        y = $(this).position().top;
        //console.log("" + x + " " + y);
        var xdrop = $("#deleteBoxTest").position().left;
        var ydrop = $("#deleteBoxTest").position().top;
        var w = Number(($(this).css("width")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2)) ;
        var h = Number(($(this).css("height")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
        var wdrop = Number(($("#deleteBoxTest").css("width")).slice(0,-2)) + Number(($("#deleteBoxTest").css("padding")).slice(0,-2));
        var hdrop = Number(($("#deleteBoxTest").css("height")).slice(0,-2)) + Number(($("#deleteBoxTest").css("padding")).slice(0,-2));
        if (max(x,xdrop) <= min(x+w,xdrop+wdrop) && max(y,ydrop)<=min(y+h,ydrop+hdrop)) {
            if(confirm("Вы точно хотите удалить?")){
                let rest=0;
                while(this.id.charAt(rest)!='_') rest++;
                rest++;
                $(this).remove();
                button_delete_answer(IDtoField, Number(this.id.substr(rest)));
            }
        }
    });
}
function deleteElQuestion(){
    $(".ui-draggable").mouseup(function(){
        x = $(this).position().left;
        y = $(this).position().top;
        //console.log("" + x + " " + y);
        var xdrop = $("#deleteBoxTest").position().left;
        var ydrop = $("#deleteBoxTest").position().top;
        var w = Number(($(this).css("width")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2)) ;
        var h = Number(($(this).css("height")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
        var wdrop = Number(($("#deleteBoxTest").css("width")).slice(0,-2)) + Number(($("#deleteBoxTest").css("padding")).slice(0,-2));
        var hdrop = Number(($("#deleteBoxTest").css("height")).slice(0,-2)) + Number(($("#deleteBoxTest").css("padding")).slice(0,-2));
        if (max(x,xdrop) <= min(x+w,xdrop+wdrop) && max(y,ydrop)<=min(y+h,ydrop+hdrop)) {
            if(confirm("Вы точно хотите удалить?")){
                $(this).remove();
                button_delete_question(IDtoField);
            }
        }
    });
}

function TsetBackSettings() {
    $('#field'+IDtoField).css("background-color", document.getElementById('BackColor').value);
    $('#slide'+IDtoField).css("background-color", document.getElementById('BackColor').value);
    hideElements(['modalBackground']);
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field'+IDtoField]);
    button_back_color(IDtoField);
}

function TchangeBackground() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalBackground']);
}

function setTemplateSettings() {
    showElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    hideElements(['modalTemplateInfo']);
    var TrueAnswersOnTemplate=$("#AnswerTrueTemplate").val()||[];

    var newQ = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newQ);
    newQ.id="question"+IDtoField;
    button_push_question(IDtoField);
    addClasses(newQ, ["newQ"]);
    newQ.innerText = document.getElementById('TemplateQuestionText').value;
    test[IDtoField].question.Text=document.getElementById('TemplateQuestionText').value;
    $("#question"+IDtoField).css("background-color", document.getElementById("TemplateColorQuestion").value);
    test[IDtoField].question.FontColor = "#000000";
    test[IDtoField].question.FontSize = "25pt";
    test[IDtoField].question.Color = document.getElementById('TemplateColorQuestion').value;
    $("#question"+IDtoField).css("width",  Number($("#field").css("width").slice(0, -2))*0.8+"px");
    $("#question"+IDtoField).css("height",  Number($("#field").css("height").slice(0, -2))*0.17+"px");
    $("#question"+IDtoField).css("left",  Number($("#field").css("width").slice(0, -2))*0.1+"px");
    $("#question"+IDtoField).css("top",  Number($("#field").css("height").slice(0, -2))*0.02+"px");

    var newA1 = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newA1);
    newA1.id="answer"+IDtoField+"_0";
    button_push_answer(IDtoField);
    addClasses(newA1, ["newA"]);
    newA1.innerText = document.getElementById('TemplateAnswerText1').value;
    test[IDtoField].answers[0].Text=document.getElementById('TemplateAnswerText1').value;
    $("#answer"+IDtoField+"_0").css("background-color", document.getElementById("TemplateColorAnswer").value);
    test[IDtoField].answers[0].FontColor =  "#000000";
    test[IDtoField].answers[0].FontSize = "25pt";
    test[IDtoField].answers[0].Color = document.getElementById('TemplateColorAnswer').value;
    $("#answer"+IDtoField+"_0").css("width",  Number($("#field").css("width").slice(0, -2))*0.65+"px");
    $("#answer"+IDtoField+"_0").css("height",  Number($("#field").css("height").slice(0, -2))*0.14+"px");
    $("#answer"+IDtoField+"_0").css("left",  Number($("#field").css("width").slice(0, -2))*0.175+"px");
    $("#answer"+IDtoField+"_0").css("top",  Number($("#field").css("height").slice(0, -2))*0.22+"px");


    var newA2 = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newA2);
    newA2.id="answer"+IDtoField+"_1";
    button_push_answer(IDtoField);
    addClasses(newA2, ["newA"]);
    newA2.innerText = document.getElementById('TemplateAnswerText2').value;
    test[IDtoField].answers[1].Text=document.getElementById('TemplateAnswerText2').value;
    $("#answer"+IDtoField+"_1").css("background-color", document.getElementById("TemplateColorAnswer").value);
    test[IDtoField].answers[1].FontColor =  "#000000";
    test[IDtoField].answers[1].FontSize = "25pt";
    test[IDtoField].answers[1].Color = document.getElementById('TemplateColorAnswer').value;
    $("#answer"+IDtoField+"_1").css("width",  Number($("#field").css("width").slice(0, -2))*0.65+"px");
    $("#answer"+IDtoField+"_1").css("height",  Number($("#field").css("height").slice(0, -2))*0.14+"px");
    $("#answer"+IDtoField+"_1").css("left",  Number($("#field").css("width").slice(0, -2))*0.175+"px");
    $("#answer"+IDtoField+"_1").css("top",  Number($("#field").css("height").slice(0, -2))*0.39+"px");


    var newA3 = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newA3);
    newA3.id="answer"+IDtoField+"_2";
    button_push_answer(IDtoField);
    addClasses(newA3, ["newA"]);
    newA3.innerText = document.getElementById('TemplateAnswerText3').value;
    test[IDtoField].answers[2].Text=document.getElementById('TemplateAnswerText3').value;
    $("#answer"+IDtoField+"_2").css("background-color", document.getElementById("TemplateColorAnswer").value);
    test[IDtoField].answers[2].FontColor =  "#000000";
    test[IDtoField].answers[2].FontSize = "25pt";
    test[IDtoField].answers[2].Color = document.getElementById('TemplateColorAnswer').value;
    $("#answer"+IDtoField+"_2").css("width",  Number($("#field").css("width").slice(0, -2))*0.65+"px");
    $("#answer"+IDtoField+"_2").css("height",  Number($("#field").css("height").slice(0, -2))*0.14+"px");
    $("#answer"+IDtoField+"_2").css("left",  Number($("#field").css("width").slice(0, -2))*0.175+"px");
    $("#answer"+IDtoField+"_2").css("top",  Number($("#field").css("height").slice(0, -2))*0.56+"px");


    var newA4 = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newA4);
    newA4.id="answer"+IDtoField+"_3";
    button_push_answer(IDtoField);
    addClasses(newA4, ["newA"]);
    newA4.innerText = document.getElementById('TemplateAnswerText4').value;
    test[IDtoField].answers[3].Text=document.getElementById('TemplateAnswerText4').value;
    $("#answer"+IDtoField+"_3").css("background-color", document.getElementById("TemplateColorAnswer").value);
    test[IDtoField].answers[3].FontColor =  "#000000";
    test[IDtoField].answers[3].FontSize = "25pt";
    test[IDtoField].answers[3].Color = document.getElementById('TemplateColorAnswer').value;
    $("#answer"+IDtoField+"_3").css("width",  Number($("#field").css("width").slice(0, -2))*0.65+"px");
    $("#answer"+IDtoField+"_3").css("height",  Number($("#field").css("height").slice(0, -2))*0.14+"px");
    $("#answer"+IDtoField+"_3").css("left",  Number($("#field").css("width").slice(0, -2))*0.175+"px");
    $("#answer"+IDtoField+"_3").css("top",  Number($("#field").css("height").slice(0, -2))*0.73+"px");


    for(let i=0; i<4;i++){
        test[IDtoField].answers[i].TrueLi = 0;}
    for(let i=0; i<TrueAnswersOnTemplate.length; i++){
        test[IDtoField].answers[TrueAnswersOnTemplate[i]].TrueLi = 1;
    }

}

function selectTemplate() {
    if (document.getElementById('field' + IDtoField).childElementCount > 0){
        alert("Пожалуйста, очистите поле.")
        return;
    }
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalTemplateInfo']);
}
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
    this.Back_Color = "";
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
    getdata = 'var newslide= new constructor_slide; var newanswer = new constructor_one_answer;';
    for (let i=0; test[i] != undefined; i++)
    {
        var get_question = 'newslide.text_question = "' + test[i].question.Text + '";' ;
        var get_answers = "";
        for (let j=0; test[i].answers[j]!=undefined; j++)
        {
            get_answers += 'newanswer.Text = "' + test[i].answers[j].Text + '"; newanswer.TrueLi =' + test[i].answers[j].TrueLi + '; newslide.answers.push(newanswer);';
        }
        getdata += get_question + get_answers + 'test.push(newslide);';
    }
}

/////////////////////////////////////////////////////////////////////

function newQuestion() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalQuestion']);
}

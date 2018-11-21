var IQ=0, IC=0, vert;
function newCard() {
	hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field'+IDtoField]);
    showElements(['modalCard']);
}
function createSpot(){
    var spot = document.createElement('div');
    document.getElementById('card'+IC).appendChild(spot);
    spot.id="spot"+IC;
    addClasses(spot, ["spot"]);
}

function newSetting() {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field'+IDtoField]);
    showElements(['modalSetting']);
}

function setSettingSettings() {
	//console.log(sort.value);
	vert = sort.value != 'serif';
	hideElements(['modalSetting']);
	reModalBlock();
}

function setCardSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field'+IDtoField).appendChild(newdiv);
    addClasses(newdiv, ["cardclass", "ui-widget", "ui-corner-all", "ui-draggable"])
    newdiv.id = "card" + IC;
    IDDIV = "#card" + IC;
    document.getElementById("card"+IC).style.left = "0px";
    document.getElementById("card"+IC).style.top = "0px";
    newdiv.innerText = document.getElementById('CardText').value;
    $(IDDIV).css("font", document.getElementById('CardFontSize').value + "pt " + document.getElementById('CardFontType').value);
    $(IDDIV).css("color", document.getElementById('CardFontColor').value);
    //$(IDDIV).css("z-index", document.getElementById('QuestionZIndex').value);
    $(IDDIV).css("background-color", document.getElementById('CardColor').value);
    $(".cardclass").resizable({containment: "parent"});
    $(".cardclass").draggable({containment: "parent"});
    createSpot();
    IC++;
	hideElements(['modalCard']);
    reModalBlock();
    //button_push_question(slideNum);
    deleteElChain();
}

function newQuestionChain() {
    if(test[IDtoField].question.Text!=""){alert("Сначала удалите старый вопрос!");} else {
    hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field' + IDtoField]);
    showElements(['modalQuestion']);}
}

function setQuestionSettingsChain() {
    if(document.getElementById('QuestionText').value!=""){
    var newdiv = document.createElement('div');
    document.getElementById('field' + IDtoField).appendChild(newdiv);
    addClasses(newdiv, ["questionclass", "ui-widget", "ui-corner-all", "ui-draggable"])
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
    hideElements(['modalQuestion']);
    reModalBlock();
    //button_push_question(IDtoField);
    deleteElChain();
}
else alert('Вопрос не может быть пустым')
}

function deleteElChain(){
	$(".ui-draggable").mouseup(function(){
		var x = $(this).position().left;
		var y = $(this).position().top;
		var xdrop = $("#deleteBoxChain").position().left;
		var ydrop = $("#deleteBoxChain").position().top;
		var w = Number(($(this).css("width")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
		var h = Number(($(this).css("height")).slice(0,-2)) + Number(($(this).css("padding")).slice(0,-2));
		var wdrop = Number(($("#deleteBoxChain").css("width")).slice(0,-2)) + Number(($("#deleteBoxChain").css("padding")).slice(0,-2));
		var hdrop = Number(($("#deleteBoxChain").css("height")).slice(0,-2)) + Number(($("#deleteBoxChain").css("padding")).slice(0,-2));
		if (max(x,xdrop) <= min(x+w,xdrop+wdrop) && max(y,ydrop)<=min(y+h,ydrop+hdrop)) {
      		if(confirm("Вы точно хотите удалить?")){
				if ($(this).attr('id').indexOf("card")!=-1){
					var idEl = $(this).attr('id');
					for (var i = idEl; i < IC; i++)
						document.getElementById("card"+i).innerHTML = document.getElementById("card"+(i+1)).innerHTML;
					$("#card" + (IC-1)).remove();
					IC--;
				}
				else
					$(this).remove();
      			//button_delete_answer(IDtoField, Number(this.id.substr(6)));
		    }
		}
	});
}
const pair = (x, y) => Object.freeze([x, y]);

setInterval(function(){
	if(category != "Тест-цепочка") return;
	var a = [];
	for (var i = 0;i<IC;i++){
		if (vert)
			var x = $("#card" + i).position().top;
		else
			var x = $("#card" + i).position().left;
		a.push(pair(x, i));
	}
	a.sort(function(v,u){
		if (v[0] > u[0]) return 1;
		else return -1;
	});
	var s = "";
	for (var i = 0; i < IC; i++){
		s+= a[i][1] + " ";
	}
	b = new Array(IQ);
	for (var i = 0; i < IC; i++){
		b[a[i][1]] = i;
	}
	for (var i = 0; i < IC; i++){
		document.getElementById("spot"+i).innerText = b[i];
	}
	console.log(s);
},100);

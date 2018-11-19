





/*
 * Функция для создания превью т.е
 * определение его размеров 
 * по исходным размером изображения
 */

function makePreview(image, a) {
  var img = image,
    w = img.width, h = img.height,
    s = w / h;     
    
  if(w > a && h > a) {
    if(img.width > img.height) {
      img.width = a;
      img.height = a / s;
    } else {
      img.height = a;
      img.width = a * s;
    }
  }
  
  return img;
}






/*
 * Эту функцию мы будем вызывать при изменении (onchange)
 * input'а т.е. когда пользователь выберет файлы.
 */
 
function onFilesSelect(e) {
  // получаем объект FileList
  var files = e.target.files,
    // FileReader (Создаётся для каждого файла)
    fr,
    // объект file из FileList'a
    file,
    // массив с информацией о файле
    data;
  
  
  // Перебираем все файлы в FileList'е
  for(var i = 0; i < files.length; i++) {    
    file = files[i];
    // Если в файле содержится изображение
    if(/image.*/.test(file.type)) {
      // узнаём информацию о нём
      data = [file.name, file.type, file.size];
      fr = new FileReader();
      // считываем его в строку base64
      fr.readAsDataURL(file);
      // как только файл загружен
      fr.onload = (function (file, data) {
        return function (e) {         
          var img = new Image(),             
            s, td;       
          img.src = e.target.result;
          
          /*
           * и как только загружено изображение
           * добавляем в информацию о файле html-код первьюшки
           */
           alert('lol')
          if(img.complete) {
            img = makePreview(img, 128);
            data.push('<img src="' + img.src + '" width=' + img.width + '" height="' + img.height + '" />')
			alert('foo')
			this.parent.innerHTML += '<img src="' + img.src + '" width=' + img.width + '" height="' + img.height + '" />';
          } else {
            img.onload =  function () {
              img = makePreview(img, 128);
              data.push('<img src="' + img.src + '" width=' + img.width + '" height="' + img.height + '" />');
			  this.parent.innerHTML += '<img src="' + img.src + '" width=' + img.width + '" height="' + img.height + '" />';
			  alert('bar')
            }
          }

        }
      }) (file, data);
    // Если файл не изображение
    }
	else
	alert('error');
  }
}




// проверяем поддерживает ли браузер file API
if(window.File && window.FileReader && window.FileList && window.Blob) {
  // если да, то как только страница загрузится
  onload = function () {
    // вешаем обработчик события, срабатывающий при изменении input'а
    document.querySelector('input').addEventListener('change', onFilesSelect, false);
  }
// если нет, то предупреждаем, что демо работать не будет
} else {
  alert('К сожалению ваш браузер не может корректно отобразразить сайт');
}




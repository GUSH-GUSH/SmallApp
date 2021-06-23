//Получение объектов
//Основной слайдер
var sliderBody = document.querySelector('.slider_body');
var sliderItems = document.querySelectorAll(".slider_item");
var sliderArrows = document.querySelectorAll(".slider_arrow>img");

//Слайдер обратной связи

//Вспомогательные переменные

var sliderInterval = 5000;
var thisSliderPosition = 0;
var sliderTurn = true;
var itemWidth = Math.round(100/window.getComputedStyle(sliderBody).width.slice(0,-2)*window.getComputedStyle(sliderItems[0]).width.slice(0,-2));
var itemMarginRight = Math.round(100/window.getComputedStyle(sliderBody).width.slice(0,-2)*window.getComputedStyle(sliderItems[0]).marginRight.slice(0,-2));
var turnPrecent = itemWidth + itemMarginRight;

console.log(turnPrecent);

window.onresize = function (){
	//код оптимизации слайдера в скрипте бургера
};

//Дублирование елементов слайдера

for(let i = 0; i < sliderItems.length; i++){
	let element = sliderItems[i];
	let elementClone = element.cloneNode(true);
	sliderBody.append(elementClone);
}

//Обновление списка елементов слайдера с учётом клонов

sliderItems = document.querySelectorAll(".slider_item");

//Перемещение двух последних елементов вперёд, для прокрутки назад

sliderItems[sliderItems.length-1].style.marginLeft = -turnPrecent + "%";
sliderBody.prepend(sliderItems[sliderItems.length-1]);
sliderItems[sliderItems.length-2].style.marginLeft = -turnPrecent + "%";
sliderBody.prepend(sliderItems[sliderItems.length-2]);

//Клик по стрелкам

sliderArrows[0].onclick = function (){
	slider(0, true);
}
sliderArrows[1].onclick = function (){
	slider(1, true);
}

//Остановка слайдера при наведении

sliderBody.onmousemove = function (){
	sliderTurn = false;
}
sliderBody.onmouseleave = function (){
	sliderTurn = true;
}

for(let i = 0; i < 2; i++){
	sliderArrows[i].onmousemove = function (){
		sliderTurn = false;
	}
	sliderArrows[i].onmouseleave = function (){
		sliderTurn = true;
	}
}

//Функция слайдера

function slider (vector, turn){
	if(sliderTurn != false || turn == true){
		//проверка направления движения слайдера
		if (vector == 1){
			//движение влево
			if(thisSliderPosition == sliderItems.length) thisSliderPosition = 0;
			let element = sliderItems[thisSliderPosition];
			element.style.marginLeft = -turnPrecent + "%";

			//Перемещаем прокрученые елементы в конец

			if(thisSliderPosition - 2 >= 0){
				sliderItems[thisSliderPosition - 2].style.marginLeft = 0;
				sliderBody.append(sliderItems[thisSliderPosition - 2]);
			}else if(thisSliderPosition - 2 == -1){
				sliderItems[sliderItems.length-1].style.marginLeft = 0;
				sliderBody.append(sliderItems[sliderItems.length-1]);
			}else if(thisSliderPosition - 2 == -2){
				sliderItems[sliderItems.length-2].style.marginLeft = 0;
				sliderBody.append(sliderItems[sliderItems.length-2]);
			}

			thisSliderPosition++;
		}else if (vector == 0){
			//движение вправо
			thisSliderPosition--;
			if(thisSliderPosition < 0) thisSliderPosition = sliderItems.length-1;
			let element = sliderItems[thisSliderPosition];
			element.style.marginLeft = 0;

			//Перемещаем елементы в начало для дальнейшей прокрутки

			if(thisSliderPosition - 2 >= 0){
				sliderItems[thisSliderPosition - 2].style.marginLeft = -turnPrecent + "%";
				sliderBody.prepend(sliderItems[thisSliderPosition - 2]);
			} else if(thisSliderPosition - 2 == -1){
				sliderItems[sliderItems.length-1].style.marginLeft = -turnPrecent + "%";
				sliderBody.prepend(sliderItems[sliderItems.length-1]);
			}else if(thisSliderPosition - 2 == -2){
				sliderItems[sliderItems.length-2].style.marginLeft = -turnPrecent + "%";
				sliderBody.prepend(sliderItems[sliderItems.length-2]);
			}
		}
	} else return false;
	//console.log(thisSliderPosition);
}

//Запуска слайдера

setInterval(slider, sliderInterval, 1);
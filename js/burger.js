//Получение объектов
var burgerBody = document.querySelector(".header_body");
var buttonOpen = document.querySelector("#burger_button");
var buttonClose = document.querySelector("#nav_close");
var body = document.querySelector("body");
var header = document.querySelector("header");
var wrapper = document.querySelector(".wrapper");

//Вспомогательные переменные
var startWidth = body.clientWidth;
var scrollWidth;
var isOpening = false;

//Обработка нажатий
buttonOpen.onclick = function () {
	startWidth = body.clientWidth;

	burgerBody.classList.add('burger_active');
	body.classList.add('burger_active');
	header.classList.add('burger_active');

	console.log(body.clientWidth);
	console.log(body.clientWidth-startWidth);
	
	scrollWidth = body.clientWidth - startWidth;
	body.style.paddingRight = scrollWidth + "px";
	isOpening = true;
}

buttonClose.onclick = function () {
	burgerBody.classList.remove('burger_active');
	body.classList.remove('burger_active');
	header.classList.remove('burger_active');
	body.style.paddingRight = 0;
	isOpening = false;
}

window.onresize = function () {
	//console.log(window.innerWidth);
	if(isOpening == true){
		if(window.innerWidth > 1000){
			if(document.documentElement.clientWidth != wrapper.clientWidth)
				body.style.paddingRight = 0;
		} else
			body.style.paddingRight = scrollWidth + "px";
	}

	//Слайдер

	var itemWidth = Math.round(100/window.getComputedStyle(sliderBody).width.slice(0,-2)*window.getComputedStyle(sliderItems[0]).width.slice(0,-2));
	var itemMarginRight = Math.round(100/window.getComputedStyle(sliderBody).width.slice(0,-2)*window.getComputedStyle(sliderItems[0]).marginRight.slice(0,-2));

	console.log(itemWidth);
	console.log(itemMarginRight);

	if(turnPrecent != itemWidth + itemMarginRight){
		turnPrecent = itemWidth + itemMarginRight;
		let marginChangingItems = document.querySelectorAll(".slider_item");
		marginChangingItems[0].style.marginLeft = -turnPrecent + "%";
		marginChangingItems[1].style.marginLeft = -turnPrecent + "%";
	}
}
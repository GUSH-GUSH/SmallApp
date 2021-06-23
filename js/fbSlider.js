//Получение объектов
var fb_slider_items = document.querySelectorAll('.fb_slider_item');
var fb_slider_nav = document.querySelector('.fb_slider_nav');
var fb_slider_nav_items = document.getElementsByClassName('fb_slider_nav_item');

//Вспомогательные переменные
var count = fb_slider_items.length;
var position = 0;

//Создание кнопок управления
fb_slider_nav.innerHTML = "";
for(let i = 0; i < count; i++){
	fb_slider_nav.insertAdjacentHTML('beforeend', '<div class="fb_slider_nav_item"></div>');
}
turn(0);

//Отслеживание нажатий
for(let i = 0; i < fb_slider_nav_items.length; i++){
	fb_slider_nav_items[i].onclick = function (){
		console.log(i);
		turn(i);
	}
}

//Логика управления
function turn(position){
	for(let i = 0; i < fb_slider_nav_items.length; i++){
		fb_slider_nav_items[i].classList.remove("fb_nav_item_active");
	}

	fb_slider_nav_items[position].classList.add("fb_nav_item_active");

	fb_slider_items[0].style.marginLeft = -100 * position + "%";
}
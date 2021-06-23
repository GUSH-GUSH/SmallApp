//Получение объектов
var description_li = document.querySelectorAll(".description_nav li");
var description_item = document.querySelectorAll(".description_item");

select(0);

for (let i = 0; i < description_li.length; i++){
	description_li[i].onclick = function (){
		select(i);
	};
}

function select(selected){
	for(let i = 0; i < description_item.length; i++){
		description_item[i].classList.add("hide");
	}
	description_item[selected].classList.remove("hide");

	for(let i = 0; i < description_li.length; i++){
		description_li[i].classList.remove("description_li_active");
	}
	
	description_li[selected].classList.add("description_li_active");
}
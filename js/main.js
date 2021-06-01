// Движение

var animationDiv_1 = document.getElementById("animation-div_1");

if (animationDiv_1){
	var map = new Array(); // map(top, right)

	for (i = 0; i <= 450 - 18; i++) {
		map.push(450 - 18 + "px_" + (i * 3) + "px");
	}

	for (i = 0; i <= 450 - 18; i++) {
		map.push((450 - 18) - (i / 2) + "px_" + (450 - 18 -i) * 3 + "px");
	}

	for (i = 0; i <= 450 - 18; i++) {
		map.push(((450 - 18)-i)/2 + "px_" + i * 3 + "px");
	}

	for (i = 0; i <= 450 - 18; i++) {
		map.push(0 + "px_" + ((450 - 18) - i) * 3 + "px");
	}

	var index = 0;
	function move() {
		if (index < map.length) {
			animationDiv_1.style.top = map[index].split("_")[0];
			animationDiv_1.style.right = map[index].split("_")[1];
			index++;
		} else {
			index = 0;
			animationDiv_1.style.top = "0px"
			animationDiv_1.style.right = "0px";
		}
	}
	setInterval (move, 5);
}



// ------------------------------------------------------------------

// Управление двжиением
var animationDiv_2 = document.getElementById("animation-div_2");

if (animationDiv_2){
	var right = 0;
	var top1 = 0;

	function moveLeft() {
		if (right != 1310) {
			right += 10;
			animationDiv_2.style.right = right + "px";
		}
	}

	function moveRight() {
		if (right != 0) {
			right -= 10;
			animationDiv_2.style.right = right + "px";
		}
	}

	function moveTop() {
		if (top1 != 0) {
			top1 -= 10;
			animationDiv_2.style.top = (top1 + "px");
		}
	}

	function moveBottom() {
		if (top1 != 430) {
			top1 += 10;
			animationDiv_2.style.top = (top1 + "px");
		}
	}

	document.onkeydown = function(e) {
		if (e.keyCode == '38') {
			e.preventDefault();
			moveTop();
		}
		else if (e.keyCode == '40') {
			e.preventDefault();
			moveBottom();
		}
		else if (e.keyCode == '37') {
			e.preventDefault();
			moveLeft();
		}
		else if (e.keyCode == '39') {
			e.preventDefault();
			moveRight();
		}
	}
}



// ------------------------------------------------------------

// Форма

function createTable() {
	let background_color = document.forms["myForm_1"]["color"].value
	table = "<table border='1' width='100%' cellpadding='5'>" +
		"<tbody>" +
		"<tr><td>Фамилия владельца</td><td>" + document.forms["myForm_1"]["familiya"].value + "</td></td>" +
		"<tr><td>Домашний адрес</td><td>" + document.forms["myForm_1"]["adres"].value + "</td></td>" +
		"<tr><td>Телефон</td><td>" + document.forms["myForm_1"]["telephone"].value + "</td></td>" +
		"<tr><td>Марка</td><td>" + document.forms["myForm_1"]["mark"].value + "</td></td>" +
		"<tr><td>Цвет</td><td><p style='width: 20px; height: 20px; background-color: " + background_color + "'></p></td></td>" +
		"<tr><td>Год выпуска</td><td>" + document.forms["myForm_1"]["yearofissue"].value + "</td></td>" +
		"<tr><td>Номер</td><td>" + document.forms["myForm_1"]["number"].value + "</td></td>" +

		"<tr><td>Дата последнего техосмотра</td><td>" + document.forms["myForm_1"]["dateofto"].value + "</td></td>" +
		"<tr><td>Номер полиса страховки</td><td>" + document.forms["myForm_1"]["polis"].value + "</td></td>" +
		"<tr><td>Дата оплаты</td><td>" + document.forms["myForm_1"]["paydate"].value + "</td></td>" +
		"<tr><td>Сумма штрафа</td><td>" + document.forms["myForm_1"]["fineamount"].value + "</td></td>" +
		"<tr><td>Причина не прохождения</td><td>" + document.forms["myForm_1"]["typeofincident"].value + "</td></td>" +
		"</tbody></table>";
	document.getElementById('tables').innerHTML += table;			
}
document.forms["myForm_1"].onsubmit = function(e) {
	e.preventDefault();
	createTable();
}
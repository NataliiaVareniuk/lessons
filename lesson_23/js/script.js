"use strict"

click1.onclick = function () {
	const bodyElement = document.body;
	console.log(bodyElement);
	ansver.value = "Результат в консолі";

}


click2.onclick = function () {
	let liAmount = parseFloat(document.getElementById('aNum').value);
	if (isNaN(liAmount) || liAmount == "") liAmount = 1;

	const textarea = document.querySelector('.liarea');
	const liExist = document.querySelector('li');


	if (liExist) {
		let template = `<li  class="list">Привіт!</li>`
		if (textarea) {
			for (let i = 0; i < liAmount - 1; i++) {
				template += `<li  class="list">Привіт!</li>`;
			}
			liExist.insertAdjacentHTML("afterend", template);
		}
		console.log(template);
	}
	else {
		let template = `<ul>`;
		if (textarea) {
			for (let i = 0; i < liAmount; i++) {
				template += `<li  class="list">Привіт!</li>`;
			}
		}
		template += `</ul>`;
		console.log(template);
		textarea.insertAdjacentHTML("afterbegin", template);
	}

	const list = document.querySelector('.list');
	if (list) {
		list.style.cssText = `
		padding-left : 50px;
		font-size: 35px;
		background-image: url('../img/action.svg') no-repeat;
		color:black;
		background-position: 0 10;
		background-size: 30px 30px;
		`;
	}

}
function clearLi() {
	const list = document.querySelectorAll('li');
	const ulExist = document.querySelector('ul');
	for (let i = 0; i < list.length; i++) list[i].remove();
	if (ulExist) ulExist.remove();
}

click3.onclick = function () {
	const body = document.querySelector('body');
	const red = document.querySelector('.redarea');
	body.classList.add('red-class');
	if (body.classList.contains('red-class') && red) red.style.backgroundColor = `red`;

}
click4.onclick = function () {
	let listItems = document.querySelectorAll('.item');
	console.log(listItems);

	if (listItems) {
		listItems.forEach((listItem, index) => {
			listItem.className = 'active';

		})

	}
	let listActive = document.querySelectorAll('.active');
	if (listActive) {
		listItems.forEach((listItem, index) => {
			listItem.innerHTML = `Eлемент: ${index + 1} `;
			listItem.style.cssText = `
				margin-bottom: 25px;
				padding: 25px 30px 70px 30px;
				text-aline: center;
				width: 250px;
				height: 20px;
				font-size: 25px;
				background-color: #ffc0cb;
				color: greenyellow;
				border: 2px solid red;
				border-radius: 10px;
			`;
		})
	}


}


function goTo() {
	const list = document.querySelector('.stop-button')
	go(list);
}

function goBack() {
	const list = document.querySelector('.begin')
	go(list);
}
function goEnd() {
	const list = document.querySelector('.end')
	go(list);
}
function go(elem) {
	const block = elem.dataset.scroll;
	elem.scrollIntoView({
		block: block,
		inline: "nearest",
		behavior: "smooth"
	});
}


function result() {
	const linkElement = document.querySelector('.link');

	console.log(linkElement);

	linkElement.dataset.setnum = "100";
	const atr = parseFloat(linkElement.dataset.setnum);

	if (!isNaN(atr) && atr < 200) {
		linkElement.style.color = `red`;

	}
	console.log(atr);
	//let speed = parseFloat(linkElement.dataset.setNum);
	//console.log(speed);
}





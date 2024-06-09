click1.onclick = function () {
	let someVar = 0;
	++someVar;

	if (someVar) {
		console.log(someVar);
		sum.value = someVar; //
	}

}


click2.onclick = function () {
	area.value = "";

	for (let i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log("Пункт №" + i);
			area.value += "Пункт №" + i + '\r\n';

		}, 500 * i)

	}


}

click3.onclick = function () {
	areaIf.value = "";

	if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
		console.log('000');
		areaIf.value += "000 ";
	}
	else {
		areaIf.value += "Нічого не потрапить, бо у виразі не виконується жодна умова:  false= (false або ( (false і true)=false ) або false)";
	}


}

function calculation() {

	let a = document.getElementById('aNum').value;
	let b = document.getElementById('bNum').value;

	if (b == "0" || b === 0) {
		console.log('Ділення на нуль!!!');
		areaSum.value = "Ділення на нуль!!!  \r\n";
	}

	else if (isNaN(a) || a == "") {
		console.log('Недопустимий символ a');
		areaSum.value = "Недопустимий символ a \r\n";

	}
	else if (isNaN(b) || b == "") {
		console.log('Недопустимий символ b');
		areaSum.value = "Недопустимий символ b  \r\n";


	}
	else {
		let c = a / b;
		console.log(`Результат ділення: ${c}`);
		areaSum.value = c;
	}


}


let array = ["mass", 10, "array", 101, "JS", "find"];

function schowArray() {
	arrayText.value = "";

	labelArray.innerText = "Масив iз  " + array.length + "  елементів";
	array.forEach(userName => {
		console.log(userName);
		arrayText.value += userName + "  ";
	});

}
function pushArray() {
	let elem = document.getElementById('addElem').value;
	if (elem != "") array.push(elem);
	else {
		addElem.placeholder = "Введіть елемент";
	}

}


function readArray() {
	let elem = document.getElementById('findElem').value;
	let count = 0;
	console.log(`шукаємо ${elem} `);
	areaArray.value = " шукаємо " + elem + "\r\n";

	/*if(array.includes(elem)){
			console.log(`${elem} є в масиві ` );
		areaArray.value+="Цей  елемент є в масиві, його номер:   "+ (array.indexOf(elem)+1);
			
	}*/
	// else {
	array.forEach((arr, index) => {

		if (arr == elem) {
			console.log(`його номер ${index + 1}`);
			areaArray.value += " Це " + (index + 1) + "-й елемент в масиві \r\n";
			count++;
		}



	});
	if (count == 0) { console.log(`нема`); areaArray.value += "немає "; }

	// }

}


function clearMethod() {
	aNum.value = "";
	bNum.value = "";
	areaSum.value = "";
	areaArray.value = "";
	addElem.value = "";
	findElem.value = "";
	arrayText.value = "";
}
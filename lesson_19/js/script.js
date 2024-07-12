"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.section-logo__burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})


click1.onclick = function () {
	const srch = document.getElementById('search');
	if (srch) {
		srch.value = '';
	}
}
function colorСhange() {
	console.log(`newColor`);
	let newColor = document.getElementById('colorLink');

	if (newColor) newColor.style.color = `red`;

}

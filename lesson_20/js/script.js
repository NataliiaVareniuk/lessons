"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.content-menu__burger-btn')) {
		document.documentElement.classList.toggle('menu-open');
	}
})
click1.onclick = function () {
	const newSearch = document.getElementById('search');
	const wp = window.screen.availWidth;

	if (newSearch) {

		if (newSearch.style.display == `none`) {
			newSearch.style.display = `flex`;
			newSearch.style.paddingBottom = `20px`;
		}

		else {
			newSearch.style.display = `none`;
			newSearch.style.paddingBottom = `0px`;


		}
	}
}

function onClickSearch() {
	const srch = document.getElementById('search');

	if (srch) {
		srch.value = '';
	}
}
function getClose() {
	let newClose = document.getElementById('closeSignUp');
	let head = document.getElementById('header');
	let bod = document.getElementById('body');
	if (newClose) {
		newClose.style.display = `none`;
		let h = head.offsetHeight;
		bod.style.paddingTop = h + `px`;
	}
}

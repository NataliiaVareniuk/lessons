

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu__button')) {
		document.documentElement.classList.toggle('menu-open');
	}
})
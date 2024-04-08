function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.header__btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		navBtn.classList.toggle('header__btn--active')
		// nav.classList.toggle('mobile-nav--open');
		// menuIcon.classList.toggle('nav-icon--active');
		// document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;
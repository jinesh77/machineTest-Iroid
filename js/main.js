/*
*  to handle scroll when click the menu. 
*/
document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach(link => {
		link.addEventListener("click", e => {
			e.preventDefault();
			const targetId = link.getAttribute("href");
			const targetSection = document.querySelector(targetId);
			window.scrollTo({
				top: targetSection.offsetTop - 100,
				behavior: "smooth"
			});
		});
	});
});

/*
* for box shadow when scroll the page
*/
const header = document.querySelector(".fixed-menu");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

/*
* to active the menus
*/
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		navLinks.forEach(link => link.classList.remove("active"));
		link.classList.add("active");
	});
});
function init() {
	let navbar = document.querySelector(".navbar");
	let navbarPosition = navbar.offsetTop;
	window.addEventListener("scroll", moveNavbar);

	function moveNavbar() {
		if (window.pageYOffset >= navbarPosition) {
			navbar.classList.add("sticky-navbar");
		}
		else {
			navbar.classList.remove("sticky-navbar");
		}
	}
	
}
document.addEventListener("DOMContentLoaded", init)

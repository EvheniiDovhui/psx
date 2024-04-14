$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop() // Отримати поточне значення прокрутки

		if (scroll > 50) {
			// Якщо прокрутка більше 50px
			$('#mainHeader').addClass('header-scrolled') // Додати клас змінного бекграунду
		} else {
			$('#mainHeader').removeClass('header-scrolled') // Видалити клас змінного бекграунду
		}
	})
})

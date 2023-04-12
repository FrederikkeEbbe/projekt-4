//Frede 
//Burgermenu
window.onload = function () {
	const menu_btn = document.querySelector('.hbmenu');
	const mobil_menu = document.querySelector('.mobil-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('aktivnu');
		mobil_menu.classList.toggle('aktivnu');
	});
}

//Login/registrer
const loginWrap = document.querySelector('.loginwrap');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopOp = document.querySelector('ikon-luk')

registerLink.addEventListener('click', ()=> {
	loginWrap.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
	loginWrap.classList.remove('active');
})

btnPopOp.addEventListener('click', ()=> {
	loginWrap.classList.add('active-popup');
})

//Asger

//Jacob

//Jasmin
function totop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
  }
// Frede 
// Burgermenu EMAIL HOPPER NED IGEN HVOR TEKSTEN BURDE VÆRE, MEN DET GØR KODEN IKKE
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
const btnPopOp = document.querySelector('#login-ikon');
const ikonLuk = document.querySelector('.ikon-luk');

registerLink.addEventListener('click', ()=> {
	loginWrap.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
	loginWrap.classList.remove('active');
});

btnPopOp.addEventListener('click', ()=> {
	loginWrap.classList.add('active-popup');
});

ikonLuk.addEventListener('click', ()=> {
	loginWrap.classList.remove('active-popup');
});

//


//Asger

//Jacob

//Jasmin
function totop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = function() {tiltop()};

function tiltop() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) {
    document.getElementById("tops").className = "forsvind";
  } else {
    document.getElementById("tops").className = "top";
  }
}

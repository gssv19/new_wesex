window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('stiky', window.scrollY > 0);

	if (header.classList.toggle('stiky', window.scrollY > 0)) {
		document.getElementById('nav_logo').src = './imagenes/logo_azul.svg';
	} else {
		document.getElementById('nav_logo').src = './imagenes/logo_amarillo.svg';
	}
});

const menu = document.querySelector('.menutoggle');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM INICIO
document.getElementById('item_uno').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM SERVICIOS
document.getElementById('item_dos').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM OFICINA
document.getElementById('item_tres').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM CENTROS EXPRESS
document.getElementById('item_cuatro').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM NOSOTROS
document.getElementById('item_cinco').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

/* BOTONES DE LOS MAPAS */
// Austin
const btn_map_austin = document.getElementById('btn_map_austin');

btn_map_austin.addEventListener('click', () => {
	window.open('https://goo.gl/maps/zDugBL3TdLFNhBer6', '_blank');
});

// Irving
const btn_map_irving = document.getElementById('btn_map_irving');

btn_map_irving.addEventListener('click', () => {
	window.open('https://goo.gl/maps/hjcomtr28RXTWPFu6', '_blank');
});

// El transito
const btn_map_et = document.getElementById('btn_map_et');

btn_map_et.addEventListener('click', () => {
	window.open('https://goo.gl/maps/cc4HnjKGmb6agW9n6', '_blank');
});

// Houston
const btn_map_houston = document.getElementById('btn_map_houston');

btn_map_houston.addEventListener('click', () => {
	window.open('https://goo.gl/maps/HUEwN8ag3QN7a3jL6', '_blank');
});

// Jiquilisco
const btn_map_jiquilisco = document.getElementById('btn_map_jiquilisco');

btn_map_jiquilisco.addEventListener('click', () => {
	window.open('https://goo.gl/maps/cc4HnjKGmb6agW9n6', '_blank');
});

// Ozatlan
const btn_map_ozatlan = document.getElementById('btn_map_ozatlan');

btn_map_ozatlan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/x51kopPv95JRzVeP8', '_blank');
});

// Santa Elena
const btn_map_se = document.getElementById('btn_map_se');

btn_map_se.addEventListener('click', () => {
	window.open('https://goo.gl/maps/Dzg6KauwubEapnuh9', '_blank');
});

// Usulután
const btn_map_usulutan = document.getElementById('btn_map_usulutan');

btn_map_usulutan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/gq1mwgEY59d85WrY7', '_blank');
});

/* ANIMACIONES CON FRAMEWORK AOS */
AOS.init();

/* FUNCION QUE LLAMAMOS PARA COPIAR AL PORTA PAPELES */
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

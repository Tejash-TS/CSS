const wrapper = document.querySelector('.wrapper');

const btnPopup = document.querySelector('.btnlogin-popup');
const iconeClose = document.querySelector('.icone-close');

btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});
iconeClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');});
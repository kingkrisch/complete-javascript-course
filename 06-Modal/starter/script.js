'use strict';

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});


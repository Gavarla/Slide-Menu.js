const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('model');


// Toggle nav
toggle.addEventListener('click',()=>
document.body.classList.toggle('show-nav')
);

// Show model
open.addEventListener('click',()=> model.classList.add('show-model'));


// Hide model
close.addEventListener('click',()=> model.classList.remove('show-model'));


// Hide model on outside click
window.addEventListener('click',e=>e.target==model ? model.classList.remove('show-model') : false);

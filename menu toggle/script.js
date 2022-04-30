(function readyJS(wim,doc){
    'use strict';

let btn=document.querySelector('#btn');
let menu=document.querySelector('.menu');
function toggle(event) {
    menu.classList.toggle('show')
}
btn.addEventListener('click',toggle,false);
})(window,document)
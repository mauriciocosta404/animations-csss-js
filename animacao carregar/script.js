var porcent=document.querySelector('.porcent');
var container=document.querySelector('.container');
var loading=document.querySelector('.loading');
var count=4;

var load = setInterval(animate,50)

function animate() {
    if(count==100){

        clearInterval(load);
        loading.parentElement.removeChild(loading)
        container.style.display='block';
    
    }else{
        count++;
        porcent.textContent=`${count}%`;
    }
}
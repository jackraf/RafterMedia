var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var slider = document.querySelector('.slider');

btn1.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '0px';
}
btn2.onclick = function(){
    this.style.background = 'white';
    btn1.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-600px';
}
btn3.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn1.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-1200px';
}
btn4.onclick = function(){
    this.style.background = 'white';
    btn1.style.background = "transparent";
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    slider.style.marginLeft ='-1800px';
}

var btn12 = document.getElementById('btn12');
var btn22 = document.getElementById('btn22');
var btn32 = document.getElementById('btn32');
var btn42 = document.getElementById('btn42');
var slider2 = document.querySelector('.slider2');

btn12.onclick = function(){
    this.style.background = 'white';
    btn22.style.background = "transparent";
    btn32.style.background = "transparent";
    btn42.style.background = "transparent";
    slider2.style.marginLeft = '0px';
}
btn22.onclick = function(){
    this.style.background = 'white';
    btn12.style.background = "transparent";
    btn32.style.background = "transparent";
    btn42.style.background = "transparent";
    slider2.style.marginLeft = '-600px';
}
btn32.onclick = function(){
    this.style.background = 'white';
    btn22.style.background = "transparent";
    btn12.style.background = "transparent";
    btn42.style.background = "transparent";
    slider2.style.marginLeft = '-1200px';
}
btn42.onclick = function(){
    this.style.background = 'white';
    btn12.style.background = "transparent";
    btn22.style.background = "transparent";
    btn32.style.background = "transparent";
}
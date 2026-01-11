// on 
let img = document.getElementById('img');
let heading= document.getElementById('heading');
let btn = document.getElementById('btn')
function on(){
    let img = document.getElementById('img');
    console.log(img.getAttribute('src'))
    img.setAttribute('src',"./assets/onbulb.jfif")
    heading.innerHTML = 'Bulb is on';
    btn.innerHTML = 'Bulb Off';
    btn.setAttribute('onclick','off()')
}

function off(){
    img.setAttribute('src',"./assets/offbulb.jfif");
    heading.innerHTML = 'Bulb is off';
    btn.innerHTML = 'Bulb On';
    btn.setAttribute('onclick','on()')
}
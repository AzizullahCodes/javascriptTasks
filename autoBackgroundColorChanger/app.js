


let getDiv = document.getElementById('main');
let heading = document.getElementById('heading')
getDiv.style.background = 'blue';
let name = [
    "Feeling Blue 😎",
    "Red Alert 🚨",
    "Green Machine 🥦",
    "Think Pink 🎀",
    "Mellow Yellow 🍌",
    "Sea Green Dreams 🐠",
    "Sky's the Limit 🌤️",
    "Orange You Glad? 🍊",
    "Purple Power 🍇",
    "Brownie Time 🍫",
    "Fifty Shades of Gray 🐺"
];
heading.innerHTML = 'I am blue'
let nameIndex = 0;
let colors = ['blue','red','green','pink','yellow','seagreen','skyblue','orange','purple','brown','gray'];
let colorIndex = 0;
setInterval(()=>{getDiv.style.background = colors[colorIndex];
    heading.innerHTML = name[nameIndex];
    nameIndex++;
    if(nameIndex >= name.length){nameIndex = 0;}
    colorIndex++;
    if(colorIndex >= colors.length){colorIndex = 0;}
},1000)
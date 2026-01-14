
let getImg = document.getElementById('img');
console.log(getImg);
let initialImgIndex = 0;
let allImgSrc = [
    "./assets/cycle.jfif",
    "./assets/bike.jfif",
    "./assets/aeroplane.jfif",
    "./assets/bus.jfif",
    "./assets/car.jfif",
    "./assets/helicopter.jfif",
    "./assets/horse.jfif",
    "./assets/train.jfif"
]


setInterval(()=>{
getImg.src = allImgSrc[initialImgIndex];
initialImgIndex++;
if(initialImgIndex >= allImgSrc.length){
    initialImgIndex = 0
}
},1000)
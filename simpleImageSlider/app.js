let allImages = document.getElementsByTagName('img');
// console.log(allImages)
for(let i = 0;i < allImages.length;i++){
    // console.log(allImages[i])
    allImages[i].style.display = 'none'
}

let initial = 0;
allImages[initial].style.display = 'block';

// next function 
function next(){
    allImages[initial].style.display = 'none';
    initial++;
    
    if(initial == allImages.length){
        initial = 0
    }
    allImages[initial].style.display = 'block'
}

// pervious function 
function prev(){
    allImages[initial].style.display = 'none';
    initial--;
    if(initial < 0){
        initial = allImages.length - 1
    }
    allImages[initial].style.display = 'block'
}
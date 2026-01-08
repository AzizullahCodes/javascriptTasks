// function fontSize increaser
function fontSize(){
    let getHeading = document.getElementById('heading');
    getHeading.classList.toggle('fontsize')
}
// function colorChanger
function colorChanger(){
    let getHeading = document.getElementById('heading');
    getHeading.classList.toggle('color')
}
// funciton textdecoration
function textDecoration(){
    let getHeading = document.getElementById('heading');
    getHeading.classList.toggle('underLine')
}

// function reversing 
let isrevers = false;
let reverse = '';
let originalstate = '';
function reversing(){
    console.log('hello')
    let getHeading = document.getElementById('heading');
   
    if(originalstate == ''){
        originalstate = getHeading.innerHTML;
    }
    
    if(!isrevers){
        let reverse = '';
        let text = getHeading.innerHTML;

        for(let i = text.length-1;i >= 0;i--){
            reverse = reverse +  text[i]
           
        }
       heading.innerHTML = reverse;
       isrevers = true;

      
    }
    else{
        getHeading.innerHTML = originalstate;
        isrevers = false;
    }
}
// funtion font family
function fontFamily(){
    let getHeading = document.getElementById('heading');
    getHeading.classList.toggle('fontFamily')
}
// upperCase() handling funciton 
let isUpperCase = false;
let originalText = "";

function uppercase() {
  let heading = document.getElementById('heading');

  // save original text only once
  if (originalText === "") {
    originalText = heading.innerText;
  }

  if (!isUpperCase) {
    heading.innerText = heading.innerText.toUpperCase();
    isUpperCase = true;
  } else {
    heading.innerText = originalText;
    isUpperCase = false;
  }
}

// lowecase handling function
let isLowercase = false;
let original = '';

function lowercase(){
    let getHeading = document.getElementById('heading');
    if(original == ''){
        original = getHeading.innerHTML
    }
    if(!isLowercase){
        getHeading.innerHTML = getHeading.innerHTML.toLowerCase();
        isLowercase = true;
    }
    else{
        getHeading.innerHTML = original;
        isLowercase = false
    }
}

// function for italic style 
function italic(){
    let getHeading = document.getElementById('heading');
    heading.classList.toggle('italic')
}
/* // first method
function letterCounter(){
    let getWord = document.getElementById('word-input').value;
    getWord = getWord.toLowerCase();
    let letter = document.getElementById('letter-input').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('result');
    let count = 0;
    for(let item of getWord){
        if(item == letter){
            count++;
        }
    }
    display.innerHTML = count + ' ' + 'time'
} */


    // second method
function letterCounter(){
    let getWord = document.getElementById('word-input').value;
    getWord = getWord.toLowerCase();
    let letter = document.getElementById('letter-input').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('result');
    // convert getword to array by split
    getWord = getWord.split('');
    let target = getWord.filter((item)=>{
        return(
            item == letter
        )
    })
    display.innerHTML = target.length + ' ' + 'time'
    display.innerHTML = `${letter} has come ${target.length} time`
}
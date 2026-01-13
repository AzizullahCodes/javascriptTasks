function generate(){
    let input = document.getElementById('input');
    let inputValue = input.value;
    inputValue = inputValue.trim();
    inputValue = inputValue.toLowerCase();
    let initial = inputValue.slice(0,1);
    let other = inputValue.slice(1);
    initial = initial.toUpperCase();
    other = other.toLowerCase();
    let tag = '#' + initial + other;
    // console.log(tag)
    // console.log(inputValue)
    document.getElementById('display').innerHTML = tag;
    input.value = '';
}
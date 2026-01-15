
function masker(){
    let input = document.getElementById('input').value;

    // console.log(input,input.length)
    let firstPart = input.slice(0,4);
    // console.log(firstPart);
    let secondPart = input.slice(4,-1);
    // console.log(secondPart);
    let lastPart = input.slice(-1);
    // console.log(lastPart)
    let requiredLength = secondPart.length;
    // console.log(requiredLength);
    let repeat = '*'.repeat(requiredLength);
    // console.log(repeat)
    let requirement = firstPart + repeat + lastPart;
    // console.log(requirement, requirement.length)
    document.getElementById('display').innerHTML = `CNIC masked 👉 ${requirement}`;
    document.getElementById('input').value = '';
}
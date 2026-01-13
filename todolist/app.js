// todo list 
let todoInput = document.getElementById('todoInput');
let displayResult = document.getElementById('result');
let button = document.getElementById('button');
let elementIdUpdate = null;

// update Item 
function updateItem(){
    let li = document.getElementById(elementIdUpdate);
    li.firstChild.nodeValue = todoInput.value;
    button.removeAttribute('onclikc');
    button.setAttribute('onclick','addItem()');
    button.innerHTML = 'Add Item';
    elementIdUpdate = null;
    clearInput();

}

// edit item function
function editItem(id){
// console.log(id)
let targetLi = String(id);
let liForEdit = document.getElementById(targetLi);
// console.log(liForEdit)
// console.log(liForEdit.firstChild)
let liForEditValue = liForEdit.firstChild.nodeValue;
todoInput.value = liForEditValue;
button.innerHTML = 'update item';
button.removeAttribute('onclick');
button.setAttribute('onclick','updateItem()');
elementIdUpdate = id;
}
// delete Item function
function deleteItem(id){
    // console.log('deletiong');
    // console.log(id)
    let targetLi = String(id);
    let liForDelete = document.getElementById(targetLi);
    displayResult.removeChild(liForDelete);
    
    
}

// clear input
function clearInput(){
    todoInput.value = '';
}
// addItem function
function addItem(){
    let li = document.createElement('li');
    let deleteItemButton = document.createElement('button');
    let deleteItemButtonContent =document.createTextNode('Delete Item');
    let editItemButton = document.createElement('button');
    let editItemButtonText = document.createTextNode('Edit Item');
    editItemButton.appendChild(editItemButtonText);
    
    deleteItemButton.appendChild(deleteItemButtonContent);
    let liContent = document.createTextNode(todoInput.value);

    // random id
    let randomId = new Date().getTime();
    deleteItemButton.setAttribute('onclick',`deleteItem(${randomId})`)
    editItemButton.setAttribute('onclick',`editItem(${randomId})`)
    console.log(randomId)
    li.appendChild(liContent);
    li.appendChild(deleteItemButton);
    li.appendChild(editItemButton);
    // set randomId in li as attribute 
    li.setAttribute('id',randomId)
    displayResult.appendChild(li)

    // calling clearInput function
    clearInput();
}

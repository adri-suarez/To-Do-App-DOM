toDoItems = [];

var creador = document.querySelector('#createdBy')
creador.innerHTML += ' Adrian';

function ToDo (description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeToDo = function(){
  this.complete = !this.complete;
}

function buildToDo(todo, index) {
  var toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell';
  /* toDoShell.setAttribute('class', 'toDoShell') */

  var toDoText = document.createElement('span');

  toDoText.innerHTML = todo.description;

  toDoText.setAttribute('id',index);

  if(todo.complete){
    toDoText.setAttribute('class', 'completeText')
  }
  toDoText.addEventListener('click', completeToDo)
  toDoShell.appendChild(toDoText);

  return toDoShell;
}

function buildToDos(toDos) {
  var arr = toDos.map(function(elem, index){
    return buildToDo(elem, index)
  })
  return arr;
  //return toDos.map(buildToDo);
}

function displayToDos() {
  var toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';
  var result = buildToDos(toDoItems);
  result.map(function(el){
    return toDoContainer.appendChild(el);
  })
  // buildToDos(toDoItems).forEach(el => toDoContainer.appendChild(el))
}

function addToDo() {
  var value = document.getElementById('toDoInput').value;
  var myTodo = new ToDo(value);
  toDoItems.push(myTodo);
  var inp = document.getElementById('toDoInput');
  inp.value = '';
  displayToDos()
}

document.getElementById('addButton').addEventListener('click', addToDo);

function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo();
  displayToDos()
}

displayToDos()

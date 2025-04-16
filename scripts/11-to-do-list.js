// The array that stores item Objects
let toDoList = [

]; 

const btn = document.querySelector(".add");

// Add New Items to Array
function addToDo() {
  const input = document.querySelector('input');
  const name = input.value;

  const inputDate = document.querySelector('.js-date');
  const date = inputDate.value;

  toDoList.push({
    name,
    date
  });

  console.log(toDoList);
  
  input.value = '';
  input.focus();

  renderHTML();
}

function renderHTML() {
  let toDoListHTML='';

  toDoList.forEach((itemObject, index)=>{
    const { name, date } = itemObject;

    const html = ` <div class="toDo-grid">
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="
        toDoList.splice(${index}, 1);
        renderHTML();
      " class="deleteBtn">Delete</button></div>
      `;
    toDoListHTML += html;
  });

  /*
  for(let i=0; i<toDoList.length;i++){
    const itemObject = toDoList[i];
    const { name, date } = itemObject;

    const html = ` <div class="toDo-grid">
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="
        toDoList.splice(${i}, 1);
        renderHTML();
      " class="deleteBtn">Delete</button></div>
      `;
    toDoListHTML += html;
  }*/

  const container = document.querySelector('.js-to-do-list');
  container.innerHTML = toDoListHTML;
}

// Attach the click event listener
btn.addEventListener("click", addToDo);

  
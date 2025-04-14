let toDoList = []; // The array that stores items

const btn = document.querySelector("button");
const input = document.querySelector('input');

// Add New Items to Array
function addToDo() {
  // Create a new list item element
  const para = document.createElement("p");
  para.textContent = input.value;
  console.log(para);

  // Push the element into the array
  toDoList.push(para);

  // Log the updated array for debugging
  console.log(toDoList);

  // Clear the input field and focus again
  input.value = '';
  input.focus();

  // Render the updated list
  renderHTML();
}

// Render HTML to the DOM from the array
function renderHTML() {
  const list = document.querySelector("ul");

  // Clear the current list (optional to avoid duplicates)
  list.innerHTML = '';

  // Append each item in the array as a list item
  toDoList.forEach(item => {
    list.appendChild(item);
  });
}

// Attach the click event listener
btn.addEventListener("click", addToDo);
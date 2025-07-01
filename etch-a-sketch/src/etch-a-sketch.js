function generateGrid(size){
  const container = document.querySelector(".container");
  container.innerHTML = '';

  const squareSize = 750/size;

  //Generate Squares
  let squaresHTML = "";
  for(let i = 0; i < size*size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    container.appendChild(square);
  }

  //Create new class to manage isHovered
  let squares = document.querySelectorAll('.square');
  squares.forEach(square =>{
    square.addEventListener('mouseenter', () => {
        square.classList.toggle('isHovered')
    });
  });
}

generateGrid(1);

let size = 0;
let gridSizeOptions = "";

//Create options menu
for(let i = 1; i<=100; i++){
  gridSizeOptions+=`<option value="${i}">${i}</option>`
}
const gridOptions = document.querySelector('.grid-size-options');
gridOptions.innerHTML=gridSizeOptions;
gridOptions.addEventListener('change', (e)=>{
    size=parseInt(e.target.value);
    generateGrid(size);}
  );



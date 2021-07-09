// 7.
const blackColor = document.querySelector('.black');
const yellowColor = document.querySelector('.yellow');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');
const selectedColor = document.querySelector('.selected');
const selectPixel = document.querySelectorAll('.pixel');

function handleChangeColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', handleChangeColor);
yellowColor.addEventListener('click', handleChangeColor);
greenColor.addEventListener('click', handleChangeColor);
blueColor.addEventListener('click', handleChangeColor);

// 8.
/* function setChangeColor() {
  let selectedButtonColor = document.querySelectorAll(".color");
  for (let index = 0; index < selectedButtonColor.length; index += 1) {
    selectedButtonColor[index].addEventListener('click', function() {
      selectedButtonColor[index].classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
}
setChangeColor(); */

// 9.
function buttonClear(buttonName) {
  let buttonDad = document.querySelector("header");
  let newButton = document.createElement("button");
  let newButtonId = 'clear-board'

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonDad.appendChild(newButton);
};

buttonClear('Limpar');

function clearPixels() {
  let getClearButton = document.querySelector('#clear-board');
  let getAllPixels = document.querySelectorAll('.pixel');
  let setNewColor = 'white';

  getClearButton.addEventListener('click', function() {
    for (let index = 0; index < getAllPixels.length; index += 1) {
      getAllPixels[index].style.backgroundColor = setNewColor;
    }
  })
}

clearPixels();

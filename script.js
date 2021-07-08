const blackColor = document.querySelector('.black');
const yellowColor = document.querySelector('.yellow');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');
const selectedColor = document.querySelector('.selected')

function handleChangeColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', handleChangeColor);
yellowColor.addEventListener('click', handleChangeColor);
greenColor.addEventListener('click', handleChangeColor);
blueColor.addEventListener('click', handleChangeColor);

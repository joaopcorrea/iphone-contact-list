const keyboard = document.querySelector('.keyboard');
const btnEdit = document.querySelector('header button');

btnEdit.onclick = () => {
  keyboard.classList.toggle('hide');
  console.log('uepa');
}
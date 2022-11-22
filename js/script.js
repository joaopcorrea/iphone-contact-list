const keyboard = document.querySelector('.keyboard');
const btnEdit = document.querySelector('header button');
const container = document.querySelector('main .container');
const keyboardSize = document.querySelector('.container .keyboard-size');

var cur_id;

btnEdit.onclick = () => {
  keyboard.classList.toggle('hide');
  console.log('uepa');
}

window.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT' ||
    event.target.tagName === 'TEXTAREA') {
    keyboard.classList.remove('hide');

    let pos = event.target.getBoundingClientRect().bottom;
    if (pos > 560) {
      keyboardSize.style.marginBottom = '240px';
      let res = pos - 560;
      container.scrollBy(0, res);
    }
  }
  else if (keyboard.contains(event.target)) {
    if (event.target.tagName === 'LI') {
      document.getElementById(cur_id).value += event.target.innerText;
      document.getElementById(cur_id).focus();
    }
  }
  else {
    keyboardSize.style.marginBottom = '0';
    keyboard.classList.add('hide');
    console.log(event.target.querySelector('.keyboard'));
  }
})

function setId(id) {
  cur_id = id;
  console.log(cur_id);
}
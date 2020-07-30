let fontSize = 24;

function onClickMinus() {
  fontSize = fontSize - 2;
  let title = document.getElementById('title');
  title.style.fontSize = fontSize + 'pt';  
}

function onClickPlus() {
  fontSize = fontSize + 2;
  let title = document.getElementById('title');
  title.style.fontSize = fontSize + 'pt';  
}

let display = document.getElementById('result');
let history = document.getElementById('history');
let current = '';

function update() {
  display.innerText = current || '0';
}

function append(value) {
  // Double operator avoid panna
  if (['+', '-', '*', '/', '%'].includes(value) && ['+', '-', '*', '/', '%'].includes(current.slice(-1))) {
    current = current.slice(0, -1) + value;
  } else {
    current += value;
  }
  update();
}

function clearAll() {
  current = '';
  history.innerText = '';
  update();
}

function backspace() {
  current = current.slice(0, -1);
  update();
}

function calculate() {
  if (!current) return;
  try {
    let expression = current.replace(/×/g, '*');
    let ans = eval(expression);
    history.innerText = current + ' =';
    current = ans.toString();
    update();
  } catch {
    display.innerText = 'Error';
    current = '';
  }
}


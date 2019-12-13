var buttons = document.querySelectorAll('.calc-button');
var output = document.querySelector('.screen');

var action = null;
var current = 0;

var actions = {
  '/': ' / ',
  '×': ' * ',
  '−': ' - ',
  '+': ' + ',
};

document.addEventListener('keypress', function (e) {
    if (e.which > 47 && e.which < 58) {
      console.log('numbers!');
    }
  });
for (button in buttons) {
  buttons[button].onclick = function (e) {
    var input = e.target.innerText;
    var num = parseInt(input);
    if (isNaN(num)) {
      if (input === 'C') {
        action = null;
        current = 0;
        output.innerText = 0;
      } else {
        if (action && action !== '=') {
          var calculation = current + actions[action] + output.innerText;
          console.log('calculate', calculation);
          output.innerText = eval(calculation);
        }
        current = parseInt(output.innerText);
        action = input;
      }
    } else {
      if (current === parseInt(output.innerText)) {
        output.innerText = num;
      } else {
        output.innerText += num;
      }
    }
    console.log({
      action: action,
      current: current,
      input: input,
    });
  };
}


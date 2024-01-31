const prompt = require('prompt');

prompt.start();

function getNumber(message, callback) {
  const property = {
    name: 'number',
    description: message,
    type: 'number',
    required: true
  };

  prompt.get(property, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      callback(result.number);
    }
  });
}

function task2() {
  getNumber('Enter the first number', (number1) => {
    getNumber('Enter the second number', (number2) => {
      const sum = number1 + number2;
      console.log(`The sum of ${number1} and ${number2} is: ${sum}`);
      prompt.stop();
    });
  });
}

module.exports = task2;
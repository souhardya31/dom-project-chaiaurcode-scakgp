const form = document.querySelector('form');
const results = document.querySelector('#results')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let result = '';

  if (height === '' || height < 0 || isNaN(height)) {
    result += 'Please enter a valid height, ';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    result += 'Please enter a valid weight';
  } else{
    const bmi = weight/(height*height/10000)
    result = `BMI:- ${bmi.toFixed(2)}`
  }
  results.textContent = result;
});

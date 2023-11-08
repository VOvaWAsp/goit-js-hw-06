
const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const length = input.value.length;
    
  if (length >= 6) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid'); 
  }
  
});
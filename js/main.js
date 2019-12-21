var form = document.querySelector('form');
console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault();
    var inputField = document.querySelector('.form-wrapper .form-control');
    var button =document.querySelector('.button');
    button.classList.add('btn-error');
    var errorMessage = document.querySelector('.error-text');
    console.log(button);
    var validity = inputField.validity;

    if(validity.valueMissing){

        errorMessage.innerHTML = 'This field cannot be empty';
        errorMessage.style.display = 'block';
        inputField.classList.add('error');
        return;
    }
    if(validity.patternMismatch){
        if(!inputField.classList.contains('error')){
            inputField.classList.add('error');
        }
        errorMessage.innerHTML = 'Please provide a valid email';
        errorMessage.style.display = 'block';
        return;
    }
    inputField.classList.remove('error');
    button.classList.remove('btn-error');
    errorMessage.style.display = 'none';
}, true)

$(':input')
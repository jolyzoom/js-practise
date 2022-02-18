
const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const submit = document.getElementById('submit');

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}
form.addEventListener('input', () => {
    if (username.value.length > 0 && password.value.length > 0 && password2.value.length > 0 ){
        submit.removeAttribute('disabled');
    }
    else{
        submit.setAttribute('disabled', 'disabled');
    }
});
form.addEventListener('submit',function(e){
    e.preventDefault();


    if(username.value===''){
        showError(username,'Username is required');
              
        }
    else{
        showSuccess(username);
        }
    if(password.value===''){
        showError(password,'Password is required');
       
    }
    else{
        showSuccess(password);        
    }
    if(password2.value===''){
        showError(password2,'confirm password is required');
        
        
    }
    else{
        showSuccess(password2);
       
    }
    if (password2.value != password.value){
        showError(password2,'Passswords do not match');
    }
    else {
        showSuccess(password2);
    }
   
});





const form = document.getElementById('form');
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validateInputs()){
        register();
    }
})

function validateInputs(){
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const usernameRegex = /^[a-zA-Z0-9_.-]{3,12}$/;
    const mailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,6})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{4,16}$/;

    if(localStorage.getItem(usernameValue))
    {
        alert("user already exist!");
        cls();
        return;
    }
    if(usernameValue === ''){
        errorFor(username, 'Username cannot be empty');
    } else if(!usernameRegex.test(usernameValue)){
        errorFor(username, 'Invalid username');
    } else {
        successFor(username);
    }

    if(mailValue === ''){
        errorFor(mail, 'Email cannot be empty');
    } else if(!mailRegex.test(mailValue)){
        errorFor(mail, 'Invalid Email');
    } else {
        successFor(mail);
    }

    if(passwordValue === ''){
        errorFor(password, 'Password is required');
    } else if(!passwordRegex.test(passwordValue)){
        errorFor(password, 'Invalid password');
    } else {
        successFor(password);
    }

    if(password2Value === ''){
        errorFor(password2, 'Password is required');
    } else if(password2Value !== passwordValue){
        errorFor(password2, 'Password does not match');
    } else {
        successFor(password2);
    }
    return true;
}

function errorFor(input, error){
    const inputWrapper = input.parentElement;
    const small = inputWrapper.querySelector('small');
    inputWrapper.className = 'inputWrapper error';
    small.innerText = error;
}

function successFor(input){
    const inputWrapper = input.parentElement;
    inputWrapper.className = 'inputWrapper success';
}

function register(){
    alert('hello')
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const user = {};
    user['username'] = usernameValue;
    user['mail'] = mailValue;
    user['password'] = passwordValue;
    localStorage.setItem( user.username , JSON.stringify(user)) 
    cls();
    alert("Registered Successfully");
}

function cls() {
    document.getElementById('username').value="";
    document.getElementById('mail').value="";
    document.getElementById('password').value="";
    document.getElementById('password2').value="";
}
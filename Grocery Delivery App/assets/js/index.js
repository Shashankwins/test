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
    debugger
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const usernameRegex = /^[a-zA-Z0-9]{4,12}$/;
    const mailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,6})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{4,16}$/;

    if(localStorage.getItem(usernameValue))
    {
        alert("user already exist!");
        cls();
        return false;
    }
    if(usernameValue === ''){
        errorFor(username, 'Username cannot be empty');
        return false;
    } else if(!usernameRegex.test(usernameValue)){
        errorFor(username, 'Invalid username');
        return false;
    } else {
        successFor(username);
    }

    if(mailValue === ''){
        errorFor(mail, 'Email cannot be empty');
        return false;
    } else if(!mailRegex.test(mailValue)){
        errorFor(mail, 'Invalid Email');
        return false;
    } else {
        successFor(mail);
    }

    if(passwordValue === ''){
        errorFor(password, 'Password is required');
        return false;
    } else if(!passwordRegex.test(passwordValue)){
        errorFor(password, 'Invalid password');
        return false;
    } else {
        successFor(password);
    }

    if(password2Value === ''){
        errorFor(password2, 'Password is required');
        return false;
    } else if(password2Value !== passwordValue){
        errorFor(password2, 'Password does not match');
        return false;
    } else {
        successFor(password2);
        return true;
    }
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
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const user = {};
    user['username'] = usernameValue;
    user['mail'] = mailValue;
    user['password'] = passwordValue;
    localStorage.setItem( user.username , JSON.stringify(user))
    sessionStorage.setItem('currentUser',JSON.stringify(user)) 
    cls();
    alert("Account created successfully");

}

function cls() {
    username.parentElement.className="inputWrapper";
    username.value ="";
    mail.parentElement.className="inputWrapper";
    mail.value ="";
    password.parentElement.className="inputWrapper";
    password.value ="";
    password2.parentElement.className="inputWrapper";
    password2.value ="";
}
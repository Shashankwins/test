const form = document.getElementById('form')
form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = JSON.parse(localStorage.getItem(user));
    if(data)
    {   
        if(data.password === password)
        {
            sessionStorage.setItem('currentUser', JSON.stringify(data))
            alert('login successful')
            window.location.href="./home.html";
        }
        else
        {
            alert("Incorrect username or password");    
        }
    }
    else
    {
        alert("Incorrect username or password");
        cls();
    }
})

function cls() {
    document.getElementById('uname').value="";
    document.getElementById('psw').value="";
}

let psw = document.querySelectorAll('i');   
for (let i = 0; i < psw.length; i++) {
    psw[i].addEventListener('click', () => {
        if (psw[i].id === "hidePassword") {
            psw[i].style.display ='none';
            document.getElementById('showPassword').style.display = 'inline-block';
            document.getElementById('password').setAttribute('type', 'text');
        } else if (psw[i].id === "showPassword") {
            psw[i].style.display='none';
            document.getElementById('hidePassword').style.display='inline-block';
            document.getElementById('password').setAttribute('type', 'password');
        }
    });
}
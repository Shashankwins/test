const flag = false;
localStorage.setItem( 'flag' , JSON.stringify(flag))
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
            flag = true;
            localStorage.setItem( 'flag' , JSON.stringify(flag));
            alert('login successful')
            // window.location.href='./home.html';
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

let psw = document.querySelectorAll('i')
for(let i=0;i<psw.length;i++)
{
    psw[i].addEventListener('click', (e) => {
        if(psw[i].id ==="showPassword")
        {
            psw[i].hidden=true;
            document.getElementById('hidePassword').hidden=false;
            document.getElementById('password').setAttribute('type', 'text')    
        }
        else if(psw[i].id ==="hidePassword")
        {
            psw[i].hidden=true;
            document.getElementById('showPassword').hidden=false;
            document.getElementById('password').setAttribute('type', 'password') 
        }
    })
}
let flag = false;
localStorage.setItem( 'flag' , JSON.stringify(flag))
let login = document.querySelector('#loginForm');
login.addEventListener('submit' , function(e) {
    e.preventDefault();
    let user = document.getElementById('uname').value;
    let password = document.getElementById('psw').value;
    let data = JSON.parse(localStorage.getItem(user));
    if(data!=null)
    {   
        if(data.psw === password)
        {
            flag = true;
            localStorage.setItem( 'flag' , JSON.stringify(flag))
            window.location.href='./home.html';
        }
        else
        {
            alert("Incorrect Password");    
        }
    }
    else
    {
        alert("No such user");
        cls();
    }
})

function cls() {
    document.getElementById('uname').value="";
    document.getElementById('psw').value="";
}
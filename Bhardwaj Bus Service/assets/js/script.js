// class user {
//     constructor(fname,lname,mail,psw)
//     {
//         this.fname = fname;
//         this.lname = lname;
//         this.mail = mail;
//         this.psw = psw;
//     }
// }
let signup = document.querySelector('#signUpForm');
signup.addEventListener('submit' , function(e) {
    e.preventDefault();
    register();
})

function register(){
    let uname = document.getElementById('uname').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mail = document.getElementById('mail').value;
    let psw = document.getElementById('psw').value;
    let a = toString(uname)
    a = {};
    a['uname'] = uname;
    a['fname'] = fname;
    a['lname'] = lname;
    a['mail'] = mail;
    a['psw'] = psw;
    localStorage.setItem( a.uname , JSON.stringify(a)) 
    cls();
    window.location.href="./login.html"
}

function cls() {
    document.getElementById('uname').value="";
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('mail').value="";
    document.getElementById('psw').value="";
}

let login = document.querySelector('#loginForm');
login.addEventListener('click' , function(e) {
    e.preventDefault();
    let user = document.getElementById(uname);
    let password = document.getElementById(psw);
    if(localStorage.getItem(user))
    {
        user.psw === password;
        console.log("Welcome")
    }
    else
    {
        console.log("No such user")
    }
})
// class user {
//     constructor(fname,lname,mail,psw)
//     {
//         this.fname = fname;
//         this.lname = lname;
//         this.mail = mail;
//         this.psw = psw;
//     }
let signup = document.querySelector('#signUpForm');
signup.addEventListener('submit' , function(e) {
    e.preventDefault();
    if(check())
    {
        register();
    }
})

function check(){
    let uname = document.getElementById('uname').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mail = document.getElementById('mail').value;
    let psw = document.getElementById('psw').value;
    let unameRegex = /^[a-zA-Z0-9]{4,12}$/;
    let fnameRegex = /^[a-zA-Z]{1,10}$/;
    let lnameRegex = /^[a-zA-Z]{1,10}$/;
    let mailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,6})+$/;
    let pswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{4,16}$/;

    if(localStorage.getItem(uname))
    {
        alert("user already exist!");
        cls();
        return;
    }
    if(!uname || !fname || !lname || !mail || !psw)
    {
        alert("Please fill all the fields");
        return;
    }
    if(!unameRegex.test(uname))
    {
        document.getElementById('unameValid').style.visibility="visible";
        return false;
    }
    document.getElementById('unameValid').style.visibility="hidden"
    if(!fnameRegex.test(fname))
    {
        document.getElementById('fnameValid').style.visibility="visible";
        return false;
    }
    document.getElementById('fnameValid').style.visibility="hidden";
    if(!lnameRegex.test(lname))
    {
        document.getElementById('lnameValid').style.visibility="visible";
        return false;
    }
    document.getElementById('lnameValid').style.visibility="hidden";
    if(!mailRegex.test(mail))
    {
        document.getElementById('mailValid').style.visibility="visible";
        return false;
    }
    document.getElementById('mailValid').style.visibility="hidden";
    if(!pswRegex.test(psw))
    {
        document.getElementById('pswValid').style.visibility="visible";
        return false;
    }
    document.getElementById('pswValid').style.visibility="hidden";
    return true;
}

function register(){
    let uname = document.getElementById('uname').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mail = document.getElementById('mail').value;
    let psw = document.getElementById('psw').value;
    let a = {};
    a['uname'] = uname;
    a['fname'] = fname;
    a['lname'] = lname;
    a['mail'] = mail;
    a['psw'] = psw;
    localStorage.setItem( a.uname , JSON.stringify(a)) 
    cls();
    alert("Registered Successfully");
    window.location.href="./index.html"
}

function cls() {
    document.getElementById('uname').value="";
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('mail').value="";
    document.getElementById('psw').value="";
}


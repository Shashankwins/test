let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let tithi = date.getDate();
let today = year+"-"+month+"-"+tithi;
document.getElementById('date').setAttribute("min" , today )


let org = document.getElementById('originCity').value;
let dest = document.getElementById('destCity').value;
let p = document.getElementById('dc')
let a = document.createElement('div')
a.className = "col-sm-12";
a.innerHTML = `
 <div class="parent">
     <div class="child">
         <h4>Deepak Travels</h4>
         <p>AC Semi-Sleeper</p>
     </div>
     <div class="child">
         <h4>08:30 AM</h4>
         <p>Shimla</p>
     </div>
     <div class="child">
         <i class="fa-solid fa-arrow-right-long"></i>
     </div>
     <div class="child">
         <h4>12:30 PM</h4>
         <p>Solan</p>
     </div>
     <div class="child">
         <h4>&#8377 250</h4>
         <p>per seat</p>
     </div>
     <div class="child">
         <button>Select Seat</button>
     </div>
 </div>`
p.appendChild(a);

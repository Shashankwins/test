let buses = [
    {
        name: "Bus A",
        startCity : "Shimla",
        endCity : "Delhi",
        departure : "10:00 AM",
        arrival : "08:00 PM",
        price :  1000,
        bookedSeats : []
    },
    {
        name: "Bus B",
        startCity : "Shimla",
        endCity : "Delhi",
        departure : "12:00 PM",
        arrival : "10:00 PM",
        price :  1200,
        bookedSeats : []
    },
    {
        name: "Bus C",
        startCity : "Delhi",
        endCity : "Shimla",
        departure : "09:00 PM",
        arrival : "07:00 AM",
        price :  900,
        bookedSeats : []
    },
    {
        name: "Bus D",
        startCity : "Delhi",
        endCity : "Shimla",
        departure : "11:00 PM",
        arrival : "09:00 AM",
        price :  950,
        bookedSeats : []
    }]
localStorage.setItem('buses' , JSON.stringify(buses));

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let curr = date.getDate();
let today = year+"-"+month+"-"+curr;
console.log(today);
document.getElementById('date').setAttribute("min" , today )


function pop(){
    let p = document.getElementById('dc')
    p.innerHTML="";
    let org = document.getElementById('originCity').value;
    let dest = document.getElementById('destCity').value;
    for ( let i =0 ; i<buses.length ;i++)
    {
        if(buses[i].startCity==org && buses[i].endCity==dest)
        {
            let a = document.createElement('div')
            a.className = "col-sm-12";
                    a.innerHTML = `
            <div class="parent">
                <div class="child">
                    <h4>${buses[i].name}</h4>
                    <p>AC Semi-Sleeper</p>
                </div>
                <div class="child">
                    <h4>${buses[i].departure}</h4>
                    <p>${buses[i].startCity}</p>
                </div>
                <div class="child">
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div class="child">
                    <h4>${buses[i].arrival}</h4>
                    <p>${buses[i].endCity}</p>
                </div>
                <div class="child">
                    <h4>&#8377 ${buses[i].price}</h4>
                    <p>per seat</p>
                </div>
                <div class="child">
                    <button class="book">Select Seat</button>
                </div>
            </div>`
            p.appendChild(a);
            booking();
        }
        else
        {
            continue;
        }
    }
}

function booking(){
    let seatBtn = document.querySelectorAll('.book');
    for(let i=0;i<seatBtn.length;i++)
    {
        seatBtn[i].addEventListener('click', ()=> {
            window.location.href="./seats.html";
        })
    }
}

let selectedSeats = document.getElementById('selectedSeats')
let seats = document.querySelectorAll('button');
for(let i=0; i<seats.length-1;i++)
{
    seats[i].addEventListener('click' , function () {
        seats[i].classList.toggle('selected')
        let seatNo = seats[i].textContent;
        console.log(seatNo)
        selectedSeats.innerHTML = `Selected Seats are : ${seatNo}`
    })
}



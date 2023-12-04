let seatsArray =[];
let selectedSeats = document.getElementById('selectedSeats')
let seats = document.querySelectorAll('button');
for(let i=0; i<seats.length-1;i++)
{
    seats[i].addEventListener('click' , function () {
        seats[i].classList.toggle('selected')
        let seatNo = seats[i].value;
        if(seatsArray.includes(seatNo))
        {
            let index= seatsArray.indexOf(seatNo);
            seatsArray.splice(index , 1);
        }
        else
        {
            seatsArray.push(seatNo);
        }
        selectedSeats.innerHTML = `Selected Seats are : ${seatsArray}`
    })
}




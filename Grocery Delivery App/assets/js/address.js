let addresses;
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
if(localStorage.hasOwnProperty('addresses')){
    addresses = JSON.parse(localStorage.getItem('addresses'));
}
else{
    addresses = [];
}
let addressForm = document.getElementById('addressForm');
let houseNo = document.getElementById('houseNo');
let addressLine1 = document.getElementById('addressLine1');
let addressLine2 = document.getElementById('addressLine2');
let landMark = document.getElementById('landMark');
let pinCode = document.getElementById('pinCode');

addressForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    let address = {};
    address['houseNo'] = houseNo.value;
    address['addressLine1'] = addressLine1.value;
    address['addressLine2'] = addressLine2.value;
    address['landMark'] = landMark.value;
    address['pinCode'] = pinCode.value;
    addresses.push(address);
    localStorage.setItem('addresses' , JSON.stringify(addresses));
    window.location.reload(); 
})

function showAddress(){
    let addressWrapper = document.getElementById('addressWrapper');
    let addresses = JSON.parse(localStorage.getItem('addresses'));
    addresses.forEach(address => {
        let addressCard = document.createElement('div')
        addressCard.className = 'addressCard'
        addressCard.innerHTML = `
            <h3>Delivery Address</h3>
            <p><strong>House Number:</strong> ${address.houseNo}</p>
            <p><strong>Address Line 1:</strong> ${address.addressLine1}</p>
            <p><strong>Address Line 2:</strong> ${address.addressLine2}</p>
            <p><strong>Landmark:</strong> ${address.landMark}</p>
            <p><strong>Pincode:</strong> ${address.pinCode}</p>
            <button class="deliveryBtn btn-success">Deliver to this address</button>`
        addressWrapper.append(addressCard);
    });
}
showAddress();

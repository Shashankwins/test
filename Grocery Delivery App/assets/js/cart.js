let productList = JSON.parse(localStorage.getItem('productList'));
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let cartWrapper = document.querySelector('tbody');
let logout = document.getElementById('logout');
let userName = document.getElementById('userName');
// window.onload = function (){
//     if(!currentUser){
//         alert('Please login to continue')
//         window.location.href='./login.html'
//     }
// }
let cartNo = document.getElementById('cart')
let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
let items = Object.keys(cartItems);
// let items;
// if(cartItems){
//     items = Object.keys(cartItems);
// }
// else {
//     items = [];
// }

  
for(let i=0;i<items.length;i++){
    for(let j=0;j<productList.length;j++){
        if(productList[j].id == items[i]){
            let cartProduct = document.createElement('tr');  
            cartProduct.innerHTML = `
            <tr>
                <td>${i+1}</td>
                <td><img src="${productList[j].image}" alt="Product image" width="100" height="100"></td>
                <td>₹ ${productList[j].price}</td>
                <td><input type="number" id="$[i]" name="quantity" min="3" max="10" value="3" class="form-control"></td>
                <td><button class="remove btn btn-danger" id="${items[i]}">Remove Item</i></button></td>
            </tr>`
            cartWrapper.append(cartProduct);
        }
        else{
            continue;
        }
    }
}

let removeBtn = document.querySelectorAll('.remove');
for(let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener('click', () => {
    let itemId = removeBtn[i].id;
    delete cartItems[itemId];
    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
    window.location.reload();
    })
}

function update() {
    userName.innerHTML=`${currentUser.name}`
    if(items.length)
    {
      cartNo.innerHTML = ` Cart(${items.length})`
    }
    else
    {
      cartNo.innerText= ` Cart(0)`
    }
}
update();

function checkOut(){
    if(cartItems){
        const items = Object.keys(cartItems)
    if(!items.length)
    {
        alert('cart is empty');
    }
    else
    {
        window.location.href='./invoice.html'
    }
    }
    else {
        alert('cart is empty')
    } 
}

logout.addEventListener('click' , (e) =>{
  e.preventDefault();
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  currentUser.cartItems = cartItems;
  localStorage.setItem(currentUser.username , JSON.stringify(currentUser)) 
  sessionStorage.clear();
  window.location.href='./login.html'
})
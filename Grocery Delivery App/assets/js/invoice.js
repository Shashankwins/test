window.onload = function (){
    if(!sessionStorage.getItem('currentUser')){
        alert('Please login to continue')
        window.location.href='./login.html'
    }
    else{
let cartNo = document.getElementById('cart')
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let curr = date.getDate();
let today = curr+"/"+month+"/"+year;
let subtotal = 0;
const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) 
const list = JSON.parse(localStorage.getItem('productList')); 
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
const invoiceWrapper = document.getElementById('invoiceWrapper');
const invoice = document.createElement('div');
invoice.className = "row"
invoice.innerHTML = 
`<div class="row">
    <div class="col-xs-12">
        <div class="invoice-header">
            <div class="invoice-title">
                <h2>Invoice</h2>
                <p>Invoice #123456</p>
                <p>Date: ${today}</p>
            </div>
        </div>
        <div class="invoice-body">
            <div class="invoice-details">
                <h3>Billing Information</h3>
                <h3>Customer Information</h3>
                <table class="table">
                    <tr>
                        <th>Customer Name</th>
                        <td>${currentUser.name}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>456 Elm Street, Anytown, CA 12345</td>
                    </tr>
                    <tr>
                        <th>Email Address</th>
                        <td>${currentUser.mail}</td>
                    </tr>
                </table>
            </div>
            <div class="invoice-items">
                <h3>Items</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody id="invoice-items">
                    </tbody>
                </table>
            </div>
            <div class="invoice-summary" id ="invoiceSummary">
            
            </div>
        </div>
    </div>
</div>`
invoiceWrapper.append(invoice);
for(let id in cartItems){
    for(let i=0;i<list.length;i++)
    {
        if(list[i].id == id){
            subtotal = subtotal + list[i].price;
            console.log(typeof(list[i].price));
            let itemWrapper = document.getElementById('invoice-items')
            let item = document.createElement('tr')
            item.innerHTML = `
            <td>${list[i].title}</td>
            <td>3</td>
            <td>₹${(list[i].price).toFixed(2)}</td>
            <td>₹${(list[i].price*3).toFixed(2)}</td>`
            itemWrapper.append(item);
        }
    }
}

subtotal = subtotal*3
let gst = ((subtotal/100)*18);
let grandTotal = Number(subtotal) + Number(gst) +100;
let invoiceSummary = document.getElementById('invoiceSummary')
let summary = document.createElement('table')
summary.className = "table"
summary.innerHTML = `
<tr>
<td>Subtotal</td>
<td class="text-right">₹ ${subtotal}</td>
</tr>
<tr>
<td>GST (18%)</td>
<td class="text-right">₹ ${gst.toFixed(2)}</td>
</tr>
<tr>
<td>Delivery</td>
<td class="text-right">₹ 100</td>
</tr>
<tr>
<td class="invoice-summary-title">GRAND TOTAL</td>
<td class="invoice-summary-amount text-right">₹ ${grandTotal.toFixed(2)}</td>
</tr>`
invoiceSummary.append(summary);

function update() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    const items = Object.keys(cartItems)
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
    }
}
  // logout 
  let logout = document.getElementById('logout')
  logout.addEventListener('click' , (e) =>{
    e.preventDefault();
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    currentUser.cartItems = cartItems;
    localStorage.setItem(currentUser.username , JSON.stringify(currentUser)) 
    sessionStorage.clear();
    window.location.href='./login.html'
  })
const cartNo = document.getElementById('cart')
const list = JSON.parse(localStorage.getItem('productList'))
const id = JSON.parse(sessionStorage.getItem('productId'))
for(let i=0;i<list.length;i++){
  if(list[i].id === id){
    const detailWrapper = document.getElementById('detailWrapper');
    detailWrapper.innerHTML = "";
    const product = document.createElement('div');
    product.innerHTML = `
    <div class="container">
      <div class="row">
       <div class="col-md-6">
          <img class="my_img" src="${list[i].image}" alt="product image" width="400" height="400">
       </div>
       <div class="col-md-6">
          <div class="_product-detail-content">
             <p class="_p-name">${list[i].title}</p>
             <div class="_p-price-box">
                <div class="p-list">
                   <span class="price">Price: ₹ ${list[i].price}</span>
                   <p class="card-text"><small class="text-muted">Rating: ${list[i].rating.rate} ( ${list[i].rating.count})</small></p>
                </div>
                <div class="_p-features">
                   <span> Description About this product:  
                   <p></span>${list[i].description}</p>
                </div>
                <button class="cart btn btn-success" onclick="toCart()">Add to cart</button>
             </div>
          </div>
       </div>
     </div>
    </div>
      `;
      detailWrapper.append(product);
  }
}

function toCart(){
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    if(cartItems)
    {
      cartItems[id]=3;
      sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
    else
    {
      let cartItems = {};
      cartItems[id]=3;
      sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
    window.location.reload();
  }

  function update() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    const items = Object.keys(cartItems)
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

  let logout = document.getElementById('logout')
  logout.addEventListener('click' , (e) =>{
    e.preventDefault();
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    currentUser.cartItems = cartItems;
    localStorage.setItem(currentUser.username , JSON.stringify(currentUser)) 
    sessionStorage.clear();
    window.location.href='./login.html'
  })
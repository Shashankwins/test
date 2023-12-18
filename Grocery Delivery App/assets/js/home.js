window.onload = function (){
  if(!sessionStorage.getItem('currentUser')){
      alert('Please login to continue')
      window.location.href='./login.html'
  }
  else {
    let productList = null;
    function getProducts() {
        return fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .catch(error => console.error(error));
      }
      getProducts().then(data => {
        productList = data;
        localStorage.setItem('productList',JSON.stringify(productList))
        const productWrapper = document.getElementById('productWrapper');
        productWrapper.innerHTML = "";
        for (let i = 0; i < productList.length; i++) {
          const product = document.createElement('div');
          product.className = "col-sm-12 col-md-5 productCard";
          product.innerHTML = `<div class="card" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${productList[i].image}" class="card-img" alt="product image" width="150" height="150">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${productList[i].title}</h5>
                  <p class="card-text">Price: ₹ ${productList[i].price}</p>
                  <p class="card-text"><small class="text-muted">Rating: ${productList[i].rating.rate} (${productList[i].rating.count})</small></p>
                  <button class="detail btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          </div>`
          productWrapper.append(product);
        }
      const detailBtn = document.querySelectorAll('.detail');
        for(let i=0;i<detailBtn.length;i++)
        {
            detailBtn[i].addEventListener('click',() => {
                const id = i+1; 
                sessionStorage.setItem('productId', id)
                window.location.href="./product-page.html"
            })
        }
    })
    update();
  }
}

function update() {
  const cartNo = document.getElementById('cart')
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
  const items = Object.keys(cartItems);
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let userName = document.getElementById('userName')
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

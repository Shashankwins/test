let productList = null;
let cartItems = [];
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
      product.className = "col-sm-12 col-md-4 col-md-offset-4";
      product.innerHTML = `
        <div class="productWrapper">
          <div class="productImage">
            <img src="${productList[i].image}" alt="product image" width="300" height="300">
          </div>
          <div class="productDetails">
            <h4>${productList[i].title}</h4>
            <div class="productPrice">
              <h5 class="price">₹ ${productList[i].price}</h5>
              <h5 class="rating">${productList[i].rating.rate} (${productList[i].rating.count})</h5>
            </div>
            <button class="detail">Details</button>
            <button class="cart">Add to cart</button> 
          </div> 
        </div>`;
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

  const cartBtn = document.querySelectorAll('.cart');
    for(let i=0;i<cartBtn.length;i++)
    {
      cartBtn[i].addEventListener('click', () => {
        const id = i+1;
        if(cartItems.indexOf(id) === -1)
        {
          cartItems.push(i+1);
        localStorage.setItem('cartItem', JSON.stringify(cartItems))
        }
      })
    }
})



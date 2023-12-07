const list = JSON.parse(localStorage.getItem('productList'))
const id = JSON.parse(sessionStorage.getItem('productId'))
for(let i=0;i<list.length;i++){
  if(list[i].id === id){
    const productWrapper = document.getElementById('productWrapper');
    productWrapper.innerHTML = "";
    const product = document.createElement('div');
    product.className = "col-sm-12 col-md-4 col-md-offset-4";
    product.innerHTML = `
      <div class="productWrapper">
        <div class="productImage">
            <img src="${list[i].image}" alt="product image" width="300" height="300">
        </div>
        <div class="productDetails">
          <h4>${list[i].title}</h4>
          <p>${list[i].description}</p>
          <div class="productPrice">
            <h5 class="price">₹ ${list[i].price}</h5>
            <h5 class="rating">${list[i].rating.rate} (${list[i].rating.count})</h5>
          </div> 
          <button onclick="toCart">Add to cart</button> 
        </div> 
      </div>`;
  productWrapper.append(product);
  }

}
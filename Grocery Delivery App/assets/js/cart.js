const cartItems = JSON.parse(localStorage.getItem('cartItem'))
const productList = JSON.parse(localStorage.getItem('productList'))
for(let i=0;i<cartItems.length;i++)
{
    for(let j=0;j<productList.length;j++)
    {
        if(productList[j].id === cartItems[i])
        {
            const cartWrapper = document.getElementById('cartWrapper')
            const cartProduct = document.createElement('div');
            cartProduct.className = "col-sm-12 col-md-4";   
            cartProduct.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${productList[j].image}" width="300" height="300"alt="product image">
                <div class="card-body">
                    <h5 class="card-title">${productList[j].title}</h5>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="3" max="10" value="3">
                    <h5>${productList[j].price}</h5>
                    <button class="btn btn-danger" id="${cartItems[i]}">Remove</button>
                </div>
            </div>`
            cartWrapper.append(cartProduct)
        }
    }
    
}

const removeBtn = document.querySelectorAll('button')
for(let i=0;i<removeBtn.length;i++)
{
    removeBtn[i].addEventListener('click' , () => {
        let id = removeBtn[i].id;
        let index=Number(cartItems.indexOf(id));
        console.log(index)
        cartItems.splice(i , 1)
        localStorage.setItem('cartItem' , JSON.stringify(cartItems))
        // window.location.reload();
    })
}
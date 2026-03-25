import { food } from './data.js';


const cart = JSON.parse(localStorage.getItem('cart')) || [];


export function populateCart() {
  if(!cart)return;
    
    let cartHtml = "";
    let summaryHtml = "";
    let totalPrice = 0;
    let total = 0;
    cart.forEach((cartItem) => {
        const foods = food.find(item => item.id === cartItem.id)
        localStorage.setItem('foods', JSON.stringify(foods))
        if (foods) {
            cartHtml += `
         <div class="cart-card">
          <img src="${foods.img}" alt="no" />
          <div class="cart-content">
            <div class="cart-header">
              <h3>${foods.name}</h3>
              <span>ksh ${foods.price}</span>
            </div>
            <p>

            ${foods.description}
              </p>
            <div class="cart-bottom">
              <div class="qty">
                <button>-</button>
                <span>${cartItem.quantity}</span>
                <button>+</button>
              </div>
              <button class="remove">Remove</button>
            </div>
          </div>
        </div>
        `
        totalPrice += foods.price 
        total = totalPrice + 150
        summaryHtml = `
          <h3>Payment Summary</h3>

        <div class="summary-row">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>

        <div class="summary-row">
          <span>Delivery</span>
          <span>Ksh 150</span>
        </div>

        <div class="summary-row total">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button class="checkout">Proceed to Checkout</button>
        <button class="remove clear-cart" >clear cart</button>`

        }

    })
    
    document.querySelector('.cart-items').innerHTML = cartHtml
    document.querySelector('.summary').innerHTML = summaryHtml

}
export function clearCart (){
  const clearBtn = document.querySelector('.remove')
  if(!clearBtn)return
   clearBtn.onclick = () =>{
    localStorage.removeItem('cart')
    
   }
   
   

}



  
 
  

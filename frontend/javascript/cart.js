import { food } from "./data.js";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

export function populateCart() {
  if (!cart) return;

  let cartHtml = "";
  let summaryHtml = "";
  let totalPrice = 0;
  let total = 0;
  cart.forEach((cartItem) => {
    const foods = food.find((item) => item.id === cartItem.id);
    localStorage.setItem("foods", JSON.stringify(foods));
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
                <button data-food-Id="${cartItem.id}" class="minus">-</button>
                <span>${cartItem.quantity}</span>
                <button data-food-Id="${cartItem.id} class="plus" >+</button>
              </div>
              <button class="remove">Remove</button>
            </div>
          </div>
        </div>
        `;
      const totalQuantrityPrice = cartItem.quantity * foods.price;
      totalPrice += totalQuantrityPrice;

      total = totalPrice + 150;
      const cartQuantity = localStorage.getItem("quantity");
      summaryHtml = `
          <h3>Payment Summary</h3>

        <div class="summary-row">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>
        <div class="summary-row">
          <span>cart quantity</span>
          <span>${cartQuantity}</span>
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
        <button class="clear-cart" >clear cart</button>`;
    } 
    else{
      cartHtml = `
       <div class="cart-card">
         <button>go shop</button>
        </div>
      `;
    }
  });

  document.querySelector(".cart-items").innerHTML = cartHtml;
  document.querySelector(".summary").innerHTML = summaryHtml;
}


export function clearCart() {
  const clearBtn = document.querySelector(".clear-cart");
  if (!clearBtn) return;
  clearBtn.onclick = () => {
    localStorage.removeItem("cart");
    console.log("cart cleared");
    location.reload();
  };
}


export function plusMinusButton() {
  const plusBtns = document.querySelectorAll(".plus");
  const minusBtns = document.querySelectorAll(".minus");

  plusBtns.forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      console.log(id);
      

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const item = cart.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    };
  });

  minusBtns.forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.id;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const item = cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    };
  });
}

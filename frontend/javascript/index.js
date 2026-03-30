import { populateUi, addToCart, cartCount } from "./data.js";
import { populateCart, clearCart, plusMinusButton } from "./cart.js";
import { saveUserDetails, renderUserDetails, removeUser, verifyUser, redirectUser, welcomeUser, updateUserDetails } from "./signup.js";

document.addEventListener("DOMContentLoaded", () => {

  if (document.querySelector(".menu")) {
    populateUi()
    addToCart()
  }

  if (document.querySelector(".cart-items")) {
    populateCart();
  }
  if(document.querySelector('.badge')){
    cartCount()
  }
  if (document.querySelector('.clear-cart')){
  clearCart()
}


});
if (document.getElementById('sign-up-button')) {
  saveUserDetails()
}
if (document.querySelector('.profile-container')) {
  renderUserDetails()
}
if (document.querySelector(".logout")) {
  removeUser()
}
if (document.getElementById('login-button')) {
  verifyUser()
}
if (document.querySelector('.home-link')) {
  redirectUser()
}
if (document.querySelector('.welcome-container')) {
  welcomeUser()
}
if (document.querySelector('.minus')) {
  plusMinusButton()
}
if (document.querySelector('.plus')) {
  plusMinusButton()
}
if(document.querySelector(".save-btn")){
  updateUserDetails()
}





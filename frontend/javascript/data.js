export const food = [
  {
    img: "../icons_images/nyama-choma.jpg",
    name: "Nyama Choma",
    id: "FDX93K1",
    description:
      "roasted goat meat seasoned with salt and served with kachumbari and ugali on the side",
    price: 850,
  },

  {
    img: "../icons_images/pizza.jpg",
    name: "Pizza Margherita",
    id: "FDP11T0",
    description:
      "Oven baked pizza topped with melted cheese fresh basil and tomato ",
    price: 1200,
  },

  {
    img: "../icons_images/ugali-sukuma-wiki.jpg",
    name: "Ugali & Sukuma Wiki",
    id: "FDK82L2",
    description:
      "Classic Kenyan staple made with maize flour served with well cooked sukuma wiki",
    price: 250,
  },

  {
    img: "../icons_images/beef-burger.jpg",
    name: "Beef Burger",
    id: "FDB88N8",
    description:
      "Juicy grilled beef patty layered with fresh lettuce tomato cheese and sauce ",
    price: 500,
  },

  {
    img: "../icons_images/chicken-pilau.jpg",
    name: "Chicken Pilau",
    id: "FDP74M3",
    description:
      "Spiced rice cooked with tender chicken pieces infused with coastal flavours",
    price: 600,
  },

  {
    img: "../icons_images/spaghetti-bolognese.jpg",
    name: "Spaghetti Bolognese",
    id: "FDS66B6",
    description:
      "Italian pasta served with a rich minced beef tomato sauce topped with cheese",
    price: 750,
  },

  {
    img: "../icons_images/chapati-beans.jpg",
    name: "Chapati & Beans",
    id: "FDT55Q4",
    description:
      "Soft layered chapati served with rich bean stew cooked in a thick tomato and spice",
    price: 300,
  },

  {
    img: "../icons_images/fried-rice.jpg",
    name: "Fried Rice",
    id: "FDF33C7",
    description:
      "Stir fried rice mixed with vegetables eggs and soy sauce creating a savory dish",
    price: 550,
  },

  {
    img: "../icons_images/githeri.jpg",
    name: "Githeri",
    id: "FDG91W5",
    description:
      "Traditional mix of maize and beans cooked together and lightly fried with onions tomatoes",
    price: 200,
  },

  {
    img: "../icons_images/chicken-curry.jpg",
    name: "Chicken Curry",
    id: "FDC21D8",
    description:
      "Tender chicken cooked in a rich spiced curry sauce with herbs and served best with rice ",
    price: 650,
  },

  {
    img: "../icons_images/fried-tilapia.jpg",
    name: "Fish Fry Tilapia",
    id: "FDF67Z6",
    description:
      "Whole tilapia deep fried to crispy perfection and served with ugali and kachumbari",
    price: 900,
  },

  {
    img: "../icons_images/taccos.jpg",
    name: "Tacos",
    id: "FDT44E9",
    description:
      "Mexican style tacos filled with seasoned meat fresh vegetables and sauce",
    price: 700,
  },

  {
    img: "../icons_images/mandazi.jpg",
    name: "Mandazi",
    id: "FDM23X7",
    description:
      "Soft fluffy fried dough snack slightly sweet and perfect for breakfast ",
    price: 100,
  },

  {
    img: "../icons_images/hot-dog.jpg",
    name: "Hot Dog",
    id: "FDH55F0",
    description:
      "Grilled sausage placed in a soft bun topped with mustard ketchup and onions",
    price: 300,
  },

  {
    img: "../icons_images/matoke.jpg",
    name: "Matoke",
    id: "FDM90P4",
    description:
      "Cooked green bananas stewed with vegetables and spices creating a soft rich dish ",
    price: 350,
  },

  {
    img: "../icons_images/chicken-wings.jpg",
    name: "Chicken Wings",
    id: "FDW66Y1",
    description:
      "Spicy grilled chicken wings coated in a rich sauce and served hot",
    price: 700,
  },

  {
    img: "../icons_images/samosa.jpg",
    name: "Samosa",
    id: "FDS77K5",
    description:
      "Crispy fried pastry filled with spiced minced meat or vegetables offering a crunchy outside ",
    price: 100,
  },

  {
    img: "../icons_images/french-fries.jpg",
    name: "French Fries",
    id: "FDF45R9",
    description:
      "Golden crispy potato fries lightly salted and served hot with optional tomato sauce ",
    price: 250,
  },

  {
    img: "../icons_images/beef-stew.jpg",
    name: "Beef Stew",
    id: "FDS29U2",
    description:
      "Tender beef cooked slowly in a rich tomato gravy with vegetables creating a comforting",
    price: 400,
  },

  {
    img: "../icons_images/grilled-steak.jpg",
    name: "Grilled Steak",
    id: "FDG12J3",
    description:
      "Juicy beef steak grilled to perfection and seasoned with herbs served with fries emium meal",
    price: 1500,
  },

  {
    img: "../icons_images/rice-beans.jpg",
    name: "Rice & Beans",
    id: "FDR18V3",
    description:
      "Steamed white rice served with well seasoned beans cooked in a flavorful ",
    price: 300,
  },

  {
    img: "../icons_images/caesar-salad.jpg",
    name: "Caesar Salad",
    id: "FDC34K4",
    description:
      "Fresh lettuce mixed with croutons cheese and creamy dressing creating a light healthy ",
    price: 500,
  },

  {
    img: "../icons_images/chapati.jpg",
    name: "Chapati",
    id: "FDZ77M6",
    description:
      "Soft layered flatbread cooked on a pan and enjoyed with stew beans ",
    price: 50,
  },

  {
    img: "../icons_images/shawarma.jpg",
    name: "Shawarma",
    id: "FDS56L5",
    description:
      "Middle eastern wrap filled with spiced meat vegetables and sauce rolled in soft flatbread",
    price: 450,
  },

  {
    img: "../icons_images/mandazi-coconut.jpg",
    name: "Mandazi Coconut",
    id: "FDL22P7",
    description:
      "Coconut flavored mandazi deep fried to golden brown and served soft inside ",
    price: 120,
  },

  {
    img: "../icons_images/ice-cream.jpg",
    name: "Ice Cream",
    id: "FDI99H2",
    description:
      "Cold creamy dessert available in multiple flavors offering a refreshing and sweet",
    price: 200,
  },
];


export function populateUi() {
  food.forEach((foodItem) => {
    let resCard = `<div class="food-card">
            <img src="${foodItem.img}" alt="Burger">

            <div class="food-content">
                <div class="food-title">
                    <p>${foodItem.name}</p>
                </div>
                <div class="food-desc">
                    ${foodItem.description}
                </div>

                <div class="food-footer">
                    <span class="price">ksh ${foodItem.price}</span>
                    <button class="btn" 
                    data-food-id="${foodItem.id}" > Add to Cart </button>
                </div>
                <select name="restaurants" id="">
                    <option value="restaurant">select restaurant</option>
                    <option value="restaurant">gobal sales</option>
                </select>
            </div>
        </div>`;
    document.querySelector(".menu").innerHTML += resCard;
    
  });
  
}

export function addToCart(){
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
   const buttonId = button.dataset.foodId
   const cart = JSON.parse(localStorage.getItem('cart')) || [];
   const existingItem = cart.find(item => buttonId === item.id )
   if(existingItem){
    existingItem.quantity +=1
   }
   else{
    cart.push({id: buttonId, quantity:1})
   }
   localStorage.setItem('cart', JSON.stringify(cart))
   location.reload()
  });
});
}
export function cartCount (){
  let product = 0;
  const cart = JSON.parse(localStorage.getItem('cart'))
  if(!cart)return;
  cart.forEach((cartItem) =>{
    product += cartItem.quantity
    
  } )
  localStorage.setItem("quantity", JSON.stringify(product))
  document.querySelector('.badge').innerHTML = product
  

}
;

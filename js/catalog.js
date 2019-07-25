/* global Product, Cart */

'use strict';

var allProducts = [];
var products = [
  {
      name: "bag",
      ext: "jpg",
      description: "r2d2 rolling suitcase",
      price: 54.99,
  },
  {
      name: "banana",
      ext: "jpg",
      description: "cuts up bananas",
      price: 4.99,
  },
  {
      name: "bathroom",
      ext: "jpg",
      description: "poop in style",
      price: 59.99,
  },
  {
      name: "boots",
      ext: "jpg",
      description: "breathable rain boots",
      price: 19.99,
  },
  {
      name: "breakfast",
      ext: "jpg",
      description: "all your breakfast in one go!",
      price: 34.99,
  },
  {
      name: "bubblegum",
      ext: "jpg",
      description: "Leaves your breath meaty fresh!",
      price: 3.99,
  },
  {
      name: "chair",
      ext: "jpg",
      description: "the comfiest chair around!",
      price: 49.99,
  },
  {
      name: "cthulhu",
      ext: "jpg",
      description: "Bow before your overlord.",
      price: 14.99,
  },
  {
      name: "dog-duck",
      ext: "jpg",
      description: "make your neighbors think you have a pet duck!",
      price: 11.99,
  },
  {
      name: "dragon",
      ext: "jpg",
      description: "Authentic dragon meat!",
      price: 3.99,
  },
  {
      name: "pen",
      ext: "jpg",
      description: "extremely useful pens!",
      price: 4.99,
  },
  {
      name: "pet-sweep",
      ext: "jpg",
      description: "Finally, a use for your pet!",
      price: 19.99,
  },
  {
      name: "scissors",
      ext: "jpg",
      description: "A cut above the rest!",
      price: 7.99,
  },
  {
      name: "shark",
      ext: "jpg",
      description: "the comfiest shark bite you'll ever experience!",
      price: 74.99,
  },
  {
      name: "sweep",
      ext: "png",
      description: "Time for your baby to earn their keep",
      price: 34.99,
  },
  {
      name: "tauntaun",
      ext: "jpg",
      description: "It's still warm!",
      price: 64.99,
  },
  {
      name: "unicorn",
      ext: "jpg",
      description: "They really do exist, and they're delicious!",
      price: 9.99,
  },
  {
      name: "usb",
      ext: "gif",
      description: "Mmmmm wiggly!",
      price: 24.99,
  },
  {
      name: "water-can",
      ext: "jpg",
      description: "We swear it works!",
      price: 12.99,
  },
  {
      name: "wine-glass",
      ext: "jpg",
      description: "almost spill proof!",
      price: 11.99,
  },
];

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  function Product(name, extension, description, price){
    this.name = name;
    this.image = "../images/" + name + "." + extension;
    this.clicks = 0;
    this.views = 0;
    this.description = description;
    this.price = price;
    
    allProducts.push(this);
};
  function createProducts() {
    for(var i = 0; i < products.length; i++){
      new Product(products[i].name,products[i].ext, products[i].description, products
        [i].price);
    }
    console.table(allProducts);
  };

function Render() {
  var productSection = document.getElementById ("catalog");
  var itemsList = document.getElementById("items");
  for(var i = 0; i < allProducts.length; i++){
    //randomProducts[i].views++;
    var img = document.createElement('img');
    var description = document.createElement('p');
    var price = document.createElement( "h1");
    var form = document.createElement("form");
    var options = document.createElement("option");

    img.setAttribute('src', allProducts[i].image);
    img.setAttribute('data-name', allProducts[i].name);
    form.addEventListener('click', addSelectedItemToCart);
    img.setAttribute('height', '250px');
    img.setAttribute('width', '250px');
    img.setAttribute('hspace', '20px');
    options.textContent = allProducts[i].name;

    description.textContent ='Product description: ' + allProducts[i].description;
    price.textContent = "Price: " + allProducts[i].price;
    productSection.appendChild(img);
    productSection.appendChild(description);
    productSection.appendChild(price);
    productSection.appendChild(form);
    itemsList.appendChild(options);
};
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {

  }


}

createProducts();
Render();
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
   var selectedItem = document.getElementById("items").val
    
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

populateForm();

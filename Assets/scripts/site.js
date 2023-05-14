///////Products////////

class Product {
    constructor(name, price, description, image) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.image = image;
    }
  }

const prodList = document.querySelector("#products");

const products = [
    new Product(
        "Damklippning",
        250.00,
        "är du en dam och vill bli klippt? denna är för dig!",
        "./assets/Images/Women.webp"
    ),
    new Product(
        "Herrklippning",
        200.00,
        "är du en herre och vill bli klippt? denna är för dig!",
        "./Assets/Images/Men.jpg"
    ),
    new Product(
        "Barnklippning",
        100.00,
        "är du ett barn och dina föräldrar vill att du ska klippa dig? denna är för dig!",
        "./Assets/Images/Kids.jpg"
    ),
    new Product(
        "Hårfärning",
        150.00,
        "Vill du byta hårfärg? Kom till oss!",
        "./Assets/Images/Dye.webp"
    )
]

for(const product of products) {
    const card = document.createElement("li");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardDescription = document.createElement("h4");
    const cardImage = document.createElement("img");
    const cardPrice = document.createElement("h5");
    const cardFooter = document.createElement("div");
    const buyButton = document.createElement("button");




    //style
    card.classList.add("card", "border-0", "my-2", "col-md-5");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body", "border-0", "pa");
    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-description");
    cardImage.classList.add("card-image");
    cardPrice.classList.add("card-price");
    cardFooter.classList.add("card-footer", "d-flex", "justify-content-between", "align-items-center", "border-0");
    buyButton.classList.add("btn", "btn-sm", "btn-outline-primary");

//innehåll 
cardTitle.innerText = product.name;
cardDescription.innerText = product.description;
cardPrice.innerText = "Pris: " + product.price + "Kr";
cardImage.src = product.image;
buyButton.innerText = "Add To Cart";

    //element
    cardFooter.append(buyButton, cardPrice);
    cardBody.append(cardImage, cardDescription);
    cardHeader.append(cardTitle);
    card.append(cardHeader, cardBody, cardFooter);
    prodList.append(card);

    buyButton.onclick = () => {
    addToCart(product.name, product.price);
    };
}



////Cart/////

const cart = [];
 
function addToCart(Name, Price) {
   
    const item = cart.find(item => item.name === Name);

  if (item) {
    item.count++;
  } else {
    const newItem = {
      name: Name,
      price: Price,
      count: 1
    };
    cart.push(newItem);
  }
}


function showCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const countedPrice = item.price * item.count;
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = item.name + " - " + countedPrice + "Kr";
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-sm", "btn-outline-primary");
      removeBtn.innerText = "Remove";
      removeBtn.onclick = () => {
        removeItem(i);
        showCart();
      };
      itemDiv.appendChild(removeBtn);
      cartDiv.appendChild(itemDiv);
    }
  }

function removeItem(i) {
    cart[i].count--;
}


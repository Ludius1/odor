function allproducts(containerClass) {
    const productsIn = [
        {
            Image: "https://www.essenza.ng/cdn/shop/files/BOSS-THE-SCENT-ABSOLUTE-by-Hugo-Boss-EAU-DE-PARFUM-SPRAY-1-6-OZ_158344e4-d1be-4d3c-863a-7862bc4f546a.c7fe8e6687c4e3720bf28fa37a1af755.webp?v=1692109388&width=500",
            rating: [true, true, true, true, true],
            name: "Magnetic Spirit Of Joy",
            price: 250    ,
        },
        {
            Image: "https://www.essenza.ng/cdn/shop/products/clubdenuitwoman.jpg?v=1616575318&width=1200",
            rating: [true, true, false, false, false],
            name: "Imagine the stylish you",
            price: 250    ,
        },
        {
            Image: "https://www.essenza.ng/cdn/shop/products/Untitleddesign_62.jpg?v=1616575334&width=800",
            rating: [true, true, true, true, false],
            name: "Feel good feel fantastic",
            price: 250    ,
        },
        {
            Image: "https://www.essenza.ng/cdn/shop/products/be2736ad57fd18d1ae579b9deb14990c.jpg?v=1630935279&width=600",
            rating: [true, true, true, true, false],
            name: "Make your day happier",
            price: 250    ,
        },
    ]
    
    const productsRatings = (ratings, starCounts) => {
        ratings.map((rating) => {
            const star = document.createElement("i");
            if (rating == true) {
                star.classList.add("fa-solid");
            } else {
                star.classList.add("fa-regular");
            }
            star.classList.add("fa-star");
            starCounts.appendChild(star);
        });
    };
    
    const productContainer = document.querySelector(containerClass);
    productContainer.classList.add("products__prodt")
    
    productsIn.map((product)  => {
        let productCard = document.createElement("div");
        productCard.classList.add("product_card");
    
        const productImage = document.createElement("img");
        productImage.src = product.Image;
        productImage.classList.add("product_image");
        productCard.appendChild(productImage);
    
        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productName.classList.add("product-name")
        productCard.appendChild(productName);
    
        const productPrice = document.createElement("h4");
        productPrice.textContent = `$${product.price}`;
        productCard.appendChild(productPrice);
    
        const starCounts = document.createElement("div");
        productsRatings(product.rating, starCounts);
        //productsRatings.style.margin-left
        productCard.appendChild(starCounts);
    
        const btn = document.createElement("button")
        btn.innerText = "Buy Now"
        productCard.appendChild(btn)
    
        btn.classList.add("primary__btn")
        btn.addEventListener("click", addToCart)
        
        
        btn.addEventListener("mouseenter",  () => {
            btn.classList.add("hoverPrimaryBtn")})
    
        btn.addEventListener("mouseleave",  () => {
            btn.classList.remove("hoverPrimaryBtn")})
    
        function addToCart() {
            const add = document.createElement("span")
            add.innerText = "Add To Cart"
            //add.textContent = "Add To Cart"
            add.classList.add("addproducttocart")
            productCard.appendChild(add) 
            
            // const addToCartRemoval = document.createElement("span")
            setTimeout(() => {
                add.classList.add("removecart")
                // productCard.appendChild("addToCartRemoval")
              }, 2000);
            
        }
    
    
    
       
        //addToCart.addEventListener(addToCart)
    
        // function remove() {
        //     console.log("I am timed!");
        //   }
        //   setTimeout(timedFn, 2000);
    
        const remove = document.createElement("span")
        remove.classList.add("removecart")
        //setTimeout(addToCart, 6000)
        productCard.appendChild(remove)
        // Append product card to the container
        productContainer.appendChild(productCard);
    
    });
    
}

allproducts(".products__prodt")
allproducts(".shop-products")
allproducts(".shop-productsSecond")

// function roll() {
//     const newproductsection = document.querySelector(".shop-products")
//     // newproductsection.append(productCard)

//     // allproducts()

// }

roll()
const productEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const itemsInCartEl = document.querySelector(".itemsInCart");

// render products
function renderProducts() {
    if (!productEl) {
        // If productEl does not exist, exit the function
        return;
    }

    productEl.innerHTML = ""; // Clear previous content if necessary
    products.forEach((product) => {
        productEl.innerHTML += `
        <li class="product-card" data-category="${product.category}">
            <div class="badge fs-18 fw-semibold">${product.badge}</div>
            <div class="product-img">
                <a href=""><img src="${product.imgsrc}" width="380" alt=""></a>
                <div class="wishlist-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <p class="name fs-20 fw-semibold">${product.name}</p>
                <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>(66)</span>
                </div>
                <div class="price d-flex align-center">
                    <p class="line-through">Rs.${product.ogprice}</p>
                    <p class="fs-20 fw-semibold">Rs.${product.price}</p>
                </div>
                <button href="" class="buy-btn" onclick="addToCart(${product.id})">Buy now</button>
            </div>
        </li>
        `;
    });
}

// Call renderProducts only if the page includes the products section
if (productEl) {
    renderProducts();
}

// cart array
let cartEl = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
    // Check if product already exists
    if (cartEl.some((item) => item.id === id)) {
        changeNumberOfUnits('plus', id);
    } else {
        const item = products.find((product) => product.id === id);
        if (item) {
            cartEl.push({
                ...item,
                numberOfUnits: 1,
            });
        }
    }
    updateCart();
}

// update cart
function updateCart() {
    if (cartItemsEl) {
        renderCartItems();
    }
    if (subtotalEl && itemsInCartEl) {
        renderSubTotal();
    }
    // Save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cartEl));
}

// calculate and render subtotal
function renderSubTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cartEl.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    if (subtotalEl) {
        subtotalEl.innerHTML = `Subtotal (${totalItems} items) : Rs.${totalPrice.toFixed(2)}`;
    }
    if (itemsInCartEl) {
        itemsInCartEl.innerHTML = totalItems;
    }
}

// render cart items
function renderCartItems() {
    if (cartItemsEl) {
        cartItemsEl.innerHTML = ""; // Clear cart Element
        cartEl.forEach((item) => {
            cartItemsEl.innerHTML += `
                <div class="cart-item text-center">
                    <div class="item-info d-flex align-center">
                        <img src="${item.imgsrc}" width="70" alt="bamboo plant">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="unit-price fw-semibold">
                        <small class="fw-semibold">Rs.</small>${item.price}
                    </div>
                    <div class="units d-flex align-center">
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                    </div>
                    <div class="delete">
                        <i class="fa-solid fa-trash" onclick="removeItemFromCart(${item.id})"></i>
                    </div>
                </div>
            `;
        });
    }
}

// remove items from cart
function removeItemFromCart(id) {
    cartEl = cartEl.filter((item) => item.id !== id);
    updateCart();
}

// change number of units 
function changeNumberOfUnits(action, id) {
    cartEl = cartEl.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}

const menuItems = {
    "coffee-classics": [
        {
            name: "Espresso",
            description: "Rich and bold espresso shot.",
            priceMedium: 40,
            priceLarge: 50,
            image: "Menu/Espresso.jpg"
        },
        {
            name: "Cafe Americano",
            description: "Bold and smooth black coffee.",
            priceMedium: 40,
            priceLarge: 50,
            image: "Menu/Cafe Americano.jpg"
        },
        {
            name: "Cappuccino",
            description: "Rich espresso with steamed milk foam.",
            priceMedium: 40,
            priceLarge: 50,
            image: "Menu/Cappuccino.jpg"
        },
        {
            name: "Latte",
            description: "Smooth espresso with steamed milk.",
            priceMedium: 40,
            priceLarge: 50,
            image: "Menu/Latte.jpg"
        },
        {
            name: "Caramel Macchiato",
            description: "Espresso with caramel and milk.",
            priceMedium: 40,
            priceLarge: 50,
            image: "Menu/Caramel Macchiato.jpg"
        }
    ],
    "signature-coffees": [
        {
            name: "ReBrew Special (Hazelnut)",
            description: "House specialty blend with unique flavors.",
            priceMedium: 50,
            priceLarge: 60,
            image: "Menu/Hazelnut.jpg"
        },
        {
            name: "Mocha Fusion",
            description: "Espresso with chocolate and creamy milk.",
            priceMedium: 50,
            priceLarge: 60,
            image: "Menu/Mocha Fusion.jpg"
        },
        {
            name: "Cold Brew Delight",
            description: "Refreshing cold brew coffee.",
            priceMedium: 50,
            priceLarge: 60,
            image: "Menu/Cold Brew Delight.jpg"
        },
        {
            name: "Nitro Cold Brew",
            description: "Creamy nitrogen-infused cold brew.",
            priceMedium: 50,
            priceLarge: 60,
            image: "Menu/Nitro Cold Brew.jpg"
        },
        {
            name: "Tiramisu Latte",
            description: "Espresso with cocoa and mascarpone flavors.",
            priceMedium: 50,
            priceLarge: 60,
            image: "Menu/Tiramisu Latte.jpg"
        }
    ],
    "non-coffee-drinks": [
        {
            name: "Matcha Latte",
            description: "Green tea with steamed milk.",
            priceMedium: 60,
            priceLarge: 70,
            image: "Menu/Matcha Latte.jpg"
        },
        {
            name: "Chai Tea Latte",
            description: "Spiced tea with steamed milk.",
            priceMedium: 60,
            priceLarge: 70,
            image: "Menu/Chai Tea Latte.jpg"
        },
        {
            name: "Classic Hot Chocolate",
            description: "Sweet and creamy hot chocolate.",
            priceMedium: 60,
            priceLarge: 70,
            image: "Menu/Classic Hot Chocolate.jpg"
        },
        {
            name: "Iced Lemon Tea",
            description: "Refreshing iced tea with lemon.",
            priceMedium: 60,
            priceLarge: 70,
            image: "Menu/Iced Lemon Tea.jpg"
        },
        {
            name: "Berry Smoothie",
            description: "Refreshing berry-flavored smoothie.",
            priceMedium: 60,
            priceLarge: 70,
            image: "Menu/Berry Sooothie.jpg.jpg"
        }
    ],
    "seasonal-specials": [
        {
            name: "Pumpkin Spice Latte",
            description: "Autumn-inspired spiced latte.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Pumpkin Spice Latte.jpg"
        },
        {
            name: "Peppermint Mocha",
            description: "Chocolatey peppermint coffee.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Peppermint Mocha.jpg"
        },
        {
            name: "Mango Iced Tea",
            description: "Refreshing iced mango tea.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Mango Iced Tea.jpg"
        },
        {
            name: "Ube Latte",
            description: "Creamy Filipino purple yam latte.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Ube Latte.jpg"
        },
        {
            name: "Strawberry Rose Lemonade",
            description: "Sweet, tangy lemonade with floral notes.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Strawberry Rose Lemonade.jpg"
        }
    ],
    "pastries-and-desserts": [
        {
            name: "Butter Croissant",
            description: "Flaky and buttery classic pastry.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Butter Croissant.jpg"
        },
        {
            name: "Chocolate Chip Cookie",
            description: "Classic cookie with chocolate chips.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Chocolate Chip Cookie.jpg"
        },
        {
            name: "Banana Bread",
            description: "Moist bread with rich banana flavor.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Banna Bread.jpg"
        },
        {
            name: "Cinnamon Roll",
            description: "Soft pastry with cream cheese glaze.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Cinnamon Roll.jpg"
        },
        {
            name: "Blueberry Muffin",
            description: "Muffin bursting with fresh blueberries.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Blueberry Muffin.jpg"
        }
    ],
    "signature-pastries": [
        {
            name: "Rebrew Brownies",
            description: "Espresso-infused fudgy brownies.",
            priceMedium: 70,
            priceLarge: 80,
            image: "Menu/Brownies.jpg"
        },
        {
            name: "Cheesecake Slice",
            description: "Creamy cheesecake, plain or topped.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Cheesecake Slice.jpg"
        },
        {
            name: "Matcha Swiss Roll",
            description: "Sponge cake filled with matcha cream.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Matcha Swiss Roll.jpg"
        },
        {
            name: "Ube Ensaymada",
            description: "Soft Filipino bread with ube and cheese.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Ube Ensaymada.jpg"
        },
        {
            name: "Carbonara Special",
            description: "Creamy carbonara with bacon and truffle oil.",
            priceMedium: 70,
            priceLarge: 80,
            image:"Menu/Special Carbonara.jpg"
        }
    ]
};

let cart = [];
let totalPrice = 0;

function addToCart(name, price, size, image) {
    const item = cart.find(item => item.name === name && item.size === size);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, size, image, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(name, size) {
    const itemIndex = cart.findIndex(item => item.name === name && item.size === size);

    if (itemIndex !== -1) {
        const item = cart[itemIndex];

        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        totalContainer.innerText = 'Total: ₱0';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div>
                        <p><strong>${item.name}</strong> (${item.size})</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <p>₱${item.price * item.quantity}</p>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart('${item.name}', '${item.size}')">X</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
        totalContainer.innerText = `Total: ₱${totalPrice}`;
    }
}

function displayMenuItems(category) {
    const menuContainer = document.getElementById(`${category}-items`);
    menuContainer.innerHTML = '';

    menuItems[category].forEach(({ name, description, priceMedium, priceLarge, image }) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-box';
        itemDiv.innerHTML = `
            <div class="item-box-img">
                <img src="${image}" alt="${name}">
            </div>
            <div class="item-box-details">
                <h3>${name}</h3>
                <p>${description}</p>
                <p>₱${priceMedium} (Medium) | ₱${priceLarge} (Large)</p>
                <div class="quantity-selection">
                    <button onclick="addToCart('${name}', ${priceMedium}, 'Medium', '${image}')">Medium</button>
                    <button onclick="addToCart('${name}', ${priceLarge}, 'Large', '${image}')">Large</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(itemDiv);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.menu-category').forEach(section => {
        section.style.display = 'none';
    });

    const selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'block';
    displayMenuItems(category);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const checkoutModal = document.createElement('div');
    checkoutModal.style.position = 'fixed';
    checkoutModal.style.top = '0';
    checkoutModal.style.left = '0';
    checkoutModal.style.width = '100%';
    checkoutModal.style.height = '100%';
    checkoutModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    checkoutModal.style.display = 'flex';
    checkoutModal.style.justifyContent = 'center';
    checkoutModal.style.alignItems = 'center';
    checkoutModal.style.zIndex = '1000';

    checkoutModal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px; width: 300px; text-align: center;">
            <h2>Checkout</h2>
            <form id="checkout-form">
                <input type="text" id="customer-name" placeholder="Your Name" required style="width: 90%; margin-bottom: 10px; padding: 8px;"/>
                <select id="order-type" required style="width: 100%; margin-bottom: 10px; padding: 8px;">
                    <option value="" disabled selected>Select Pickup or Delivery</option>
                    <option value="pickup">Pickup</option>
                    <option value="delivery">Delivery</option>
                </select>
                <input type="text" id="address" placeholder="Address (if Delivery)" style="width: 90%; margin-bottom: 10px; padding: 8px;" disabled />
                <p>Total: ₱${totalPrice}</p>
                <button type="submit" style="padding: 8px 12px; background: green; color: white; border: none; border-radius: 5px;">Submit</button>
                <button type="button" id="cancel-checkout" style="padding: 8px 12px; background: red; color: white; border: none; border-radius: 5px; margin-left: 10px;">Cancel</button>
            </form>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    const orderType = document.getElementById('order-type');
    const addressInput = document.getElementById('address');

    orderType.addEventListener('change', () => {
        if (orderType.value === 'delivery') {
            addressInput.disabled = false;
        } else {
            addressInput.disabled = true;
            addressInput.value = '';
        }
    });

    document.getElementById('cancel-checkout').addEventListener('click', () => {
        document.body.removeChild(checkoutModal);
    });

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('customer-name').value;
        const type = document.getElementById('order-type').value;
        const address = type === 'delivery' ? document.getElementById('address').value : 'N/A';
        const finalTotal = type === 'delivery' ? totalPrice + 30 : totalPrice;

        alert(`
            Thank you for your order, ${name}!
            Order Type: ${type}
            Address: ${address}
            Total: ₱${finalTotal}
            Items:
            ${cart.map(item => `${item.quantity}x ${item.name} (${item.size}) - ₱${item.price * item.quantity}`).join('\n')}
        `);

        cart = [];
        updateCartDisplay();
        document.body.removeChild(checkoutModal);
    });
});

filterCategory('coffee-classics');

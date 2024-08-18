// Open and close the cart
var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active");
    document.addEventListener('click', close_cart_on_click_outside);
}

function close_cart() {
    cart.classList.remove("active");
    document.removeEventListener('click', close_cart_on_click_outside);
}

// Function to close the cart if clicked outside of it
function close_cart_on_click_outside(event) {
    if (!cart.contains(event.target) && !event.target.closest('.icon_cart')) {
        close_cart();
    }
}

// Attach the close_cart function to the close button
document.querySelector('.close_cart').addEventListener('click', close_cart);




//* Start of Open & close Responsive menu *//

// Responsive menu elements
var responsivemenu = document.querySelector('#responsivemenu');
var menuButton = document.querySelector('.btn_open_menu');

// Function to open the responsive menu
function openMenu() {
    responsivemenu.classList.add("active");
    document.addEventListener('click', closeMenuOnClickOutside);
}

// Function to close the responsive menu
function closeMenu() {
    responsivemenu.classList.remove("active");
    document.removeEventListener('click', closeMenuOnClickOutside);
}

// Function to close the menu if clicked outside of it
function closeMenuOnClickOutside(event) {
    if (!responsivemenu.contains(event.target) && !event.target.closest('.btn_open_menu')) {
        closeMenu();
    }
}

// Attach the openMenu function to the menu button
menuButton.addEventListener('click', openMenu);


//* End of Open & close Responsive menu *//

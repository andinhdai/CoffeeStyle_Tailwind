document.addEventListener('DOMContentLoaded', function () {
    //top-menu
    const topMenu = document.getElementById('add-top-menu')
    const menuToggle = document.getElementById('add-menu-toggle')
    document.addEventListener('click', (e) => {
        if (menuToggle.contains(e.target)) {
            topMenu.classList.toggle('add-topmenu-expanded')
            topMenu.classList.toggle('hidden')
        } else {
            if (topMenu.classList.contains('add-topmenu-expanded')) {
                topMenu.classList.remove('add-topmenu-expanded')
                topMenu.classList.add('hidden')
            }
        }
    });//end topmenu

    //video
    var video = document.getElementById('story-video');
    video.muted = true;
    //end video

    //cart
    const openCart = document.getElementById('Cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const Cart = document.getElementById('add-cart');
    function openCartWithAnimation() {
        Cart.style.position = 'fixed'; // Thêm thuộc tính fixed
        Cart.style.right = '0';
        Cart.style.top = '0';
        Cart.classList.remove('hidden');
        Cart.classList.add('add-cart-show');
        Cart.classList.remove('hidden');
        Cart.classList.add('add-cart-show');
        
    }
    function closeCartWithAnimation() {
        Cart.classList.add('add-cart-hidden');
        Cart.addEventListener('animationend', () => {
            Cart.classList.add('hidden');
            Cart.classList.remove('add-cart-hidden');
            Cart.classList.remove('add-cart-show');
        }, { once: true });
    }
    // Mở giỏ hàng khi nhấn vào Cart-toggle
    openCart.addEventListener('click', (e) => {
        e.stopPropagation(); 
        openCartWithAnimation();
    });

    // Đóng giỏ hàng khi nhấn vào closeCart
    closeCart.addEventListener('click', (e) => {
        e.stopPropagation(); 
        closeCartWithAnimation();
    });
    // Đóng giỏ hàng khi nhấn bên ngoài giỏ hàng
    document.addEventListener('click', (e) => {
        if (!Cart.contains(e.target) && !openCart.contains(e.target)) {
            closeCartWithAnimation();
        }
    });
    //end cart
});

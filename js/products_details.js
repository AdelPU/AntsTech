/* fetch('js/products_details.json')
.then(response => response.json())
.then(data =>{

    const swiper_sale_items = document.getElementById("swiper_sale_items");

    data.forEach(product => {

        if(product.old_price){

            swiper_sale_items.innerHTML +=`
            
            <div class="product swiper-slide">

            <span class="sales_discount">10%</span>

            <div class="img_product">
                <img src="img/product/product1.jpg" alt="">
                <img class="img_hover" src="img/product/product-1.jpg" alt="">
            </div>

            <h3 class="name_product"><a href="#">Lenovo-THINKPAD-E16-G1-21JN0073US1-450x450</a></h3>

            <div class="price-row">

                <div class="price">
                    <p><span>$ 220</span></p>
                    <p class="old_price">$ 240</p>
                </div>

                <div class="icons">
                    <i class="fa-regular fa-heart" data-tooltip="Add to Wishlist"></i>
                    <i class="fa-solid fa-cart-shopping" data-tooltip="Add to Cart"></i>
                </div>

            </div>
            
            <div class="product_details">

                <div class="product_specs">
                    <ul>
                        <li><strong>Brand:</strong> <span>HP</span></li>
                        <li><strong>Processor:</strong> <span> Core i7 13th Gen</span></li>
                        <li><strong>RAM:</strong> <span>12GB RAM</span></li>
                        <li><strong>SSD:</strong> <span>1TB SSD</span></li>
                        <li><strong>Display Size:</strong> <span>17.3"</span></li>
                        <li><strong>Display Resolution:</strong> <span>FHD (1920 x 1080)</span></li>
                    </ul>
                </div>

                <div class="expand-button" onclick="toggleDetails(this)">. . .</div>

                <div class="more_details">
                    <ul>
                        <li><strong>Battery Life:</strong> <span>10 hours</span></li>
                        <li><strong>Weight:</strong> <span>2.5 kg</span></li>
                        <!-- Add more specs as needed -->
                    </ul>
                </div>

            </div>

        </div>

            
            
            
            
            `
        }
    })
}

) */
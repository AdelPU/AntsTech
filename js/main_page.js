/* Initialize Swiper for slide-swp */
var swiperSlideSwp = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 3000,
  },
  loop: true
});

/* End Swiper */


/* Initialize Sale_sec */
var swiperSaleSec = new Swiper(".sale_sec", {
  slidesPerView: 5,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true
});

/* Add event listeners to stop and start autoplay on hover */
const productCards = document.querySelectorAll('.product');

productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    swiperSaleSec.autoplay.stop();
  });
  card.addEventListener('mouseleave', () => {
    swiperSaleSec.autoplay.start();
  });
});

/* End of initializing Sale_sec */


/* Initialize slide slide_1 section */
var productSwip1 = new Swiper(".product_swip", {
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true
});

/* Add event listeners to stop and start autoplay on hover */
const productCard1 = document.querySelectorAll('.product');

productCard1.forEach(card => {
  card.addEventListener('mouseenter', () => {
    productSwip1.autoplay.stop();
  });
  card.addEventListener('mouseleave', () => {
    productSwip1.autoplay.start();
  });
});

/* End of initializing slide slide_1 section */

/* Initialize slide slide_2 section */
var productSwip2 = new Swiper(".product_swip2", {
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true
});

/* Add event listeners to stop and start autoplay on hover */
const productCard2 = document.querySelectorAll('.product');

productCard2.forEach(card => {
  card.addEventListener('mouseenter', () => {
    productSwip2.autoplay.stop();
  });
  card.addEventListener('mouseleave', () => {
    productSwip2.autoplay.start();
  });
});

/* End of initializing slide slide_2 section */



/* Start of product additional details */

function toggleDetails(button) {
  const moreDetails = button.nextElementSibling;
  if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
    moreDetails.style.display = "block";
    button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    button.classList.add("hide-active");
  } else {
    moreDetails.style.display = "none";
    button.innerHTML = ". . .";
    button.classList.remove("hide-active");
  }
}

/* End of product additional details */


/* Start ToolTip for icons */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.icons i[data-tooltip]').forEach(icon => {
    icon.addEventListener('mouseenter', showTooltip);
    icon.addEventListener('mouseleave', hideTooltip);
  });
});

function showTooltip(event) {
  const tooltipText = event.target.getAttribute('data-tooltip');
  if (!tooltipText) return;

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = tooltipText;
  document.body.appendChild(tooltip);

  const { left, top, width } = event.target.getBoundingClientRect();
  tooltip.style.left = `${left + window.scrollX + width / 2 - tooltip.offsetWidth / 2}px`;
  tooltip.style.top = `${top + window.scrollY - tooltip.offsetHeight - 5}px`;

  requestAnimationFrame(() => tooltip.classList.add('show'));
  event.target._tooltipElement = tooltip;
}

function hideTooltip(event) {
  const tooltip = event.target._tooltipElement;
  if (tooltip) {
    tooltip.classList.remove('show');
    tooltip.addEventListener('transitionend', () => tooltip.remove(), { once: true });
    event.target._tooltipElement = null;
  }
}

/* End ToolTip for icons */

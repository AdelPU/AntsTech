const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
}

// change BIG ITEM IMAGE

document.addEventListener("DOMContentLoaded", function() {
    // Get the big image element and the first sub image
    let bigImage = document.getElementById("bigImg");
    let firstSubImage = document.querySelector('.sub_img img');

    // Set the src of the big image to the src of the first sub image
    bigImage.src = firstSubImage.src;

    // Set the first sub image as active
    firstSubImage.classList.add('active');

    // Add click event listeners to all sub images
    document.querySelectorAll('.sub_img img').forEach((img) => {
        img.addEventListener('click', function() {
            ChangeItemImage(this.src);
        });
    });
});

function ChangeItemImage(imgSrc) {
    // Update the src of the big image
    let bigImage = document.getElementById("bigImg");
    bigImage.src = imgSrc;

    // Remove 'active' class from all sub images
    document.querySelectorAll('.sub_img img').forEach((i) => i.classList.remove('active'));

    // Add 'active' class to the clicked image
    event.target.classList.add('active');
}


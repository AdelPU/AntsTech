
/* PHONE NUMBER FORMAT*/
document.getElementById('phone').addEventListener('input', function(e) {
    var input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    var formattedInput = '';

    if (input.length > 0) {
        formattedInput += input.substring(0, 2);
    }
    if (input.length > 2) {
        formattedInput += ' ' + input.substring(2, 5);
    }
    if (input.length > 5) {
        formattedInput += ' ' + input.substring(5, 8);
    }

    e.target.value = formattedInput;

});
/* END OF PHONE NUMBER FORMAT */

/*APPLY EFFECT FOR DISCOUNT INPUT*/
document.getElementById('discount-code').addEventListener('input', function() {
    var applyButton = document.getElementById('apply-button');
    if (this.value.trim() !== '') {
        applyButton.classList.add('active');
    } else {
        applyButton.classList.remove('active');
    }
});
/* END APPLY EFFECT FOR DISCOUNT INPUT*/


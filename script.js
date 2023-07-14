// variables
const copyBtn = document.querySelector(".copy-btn"),
      coupon = document.querySelector(".coupon-text");


// adding the event listener
copyBtn.addEventListener('click',copyText);


// function 
function copyText(e) {
    e.preventDefault();

   /*  
    // here select the input field
    coupon.select();
    // setting the range to be considered to copy
    coupon.setSelectionRange(0,999999);

    // Copying text to clipboard using execCommand() method
    document.execCommand('copy');
     */
    
    // here the write method accepts only one parameter and  is asyncronous method which returns a promise
    navigator.clipboard.writeText(coupon.value).then(() => {
        copyBtn.innerText = 'Copied!!!';

        // setting time for changing the button text back to copy
        setTimeout(() => { copyBtn.innerText = 'Copy'},300)
    });
    
}
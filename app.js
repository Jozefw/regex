/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

(function(){
    let phoneNumber = document.getElementById("phone");
    let phoneRegEx = /\(?\d{3}\)?[-.]?\d{3}[.-]?\d{4}/;

    phoneNumber.addEventListener("keyup",function(){
        if( phoneRegEx.test(phoneNumber.value) ){
            phoneNumber.classList.remove("red");
            phoneNumber.classList.add("green");
        } else {
            phoneNumber.classList.remove("green");
            phoneNumber.classList.add("red");
        }
    });
})();

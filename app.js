const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-bar1');

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu');
})


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("You've copied the bitcoin address Donation can be made via this address: " + copyText.value);
  }
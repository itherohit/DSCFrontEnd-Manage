AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 250, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500
})

const emailInput = document.getElementById("email");
const emailButton = document.getElementById("emailbutton");

emailButton.addEventListener('click', ()=>{
    if(emailInput.value === ""){
        alert("Empty Email cannot be accepted.");
    }else{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(emailInput.value).toLowerCase())){
            alert("Successful");
        }else{
            alert("Email Invalid");
        }
    }
})
//landing page JavaScript 
//landing page JavaScript

//for Pop-Up ads function
function closePromo() {
    document.querySelector('.promotion').style.display='none';
}

// Initialize the map
function initMap() {
    // Create a map object
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12
    });
  
    // Add a marker to the map
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: 'Jakarta'
    });
}


//menu Javascript
//menu Javascript

function addChart(name, price) {
  const cartBody = document.getElementById('cartBody');
  const totalPriceElement = document.getElementById('totalPrice');
  const cartItem = document.createElement('tr');
 
  // Add item name and price to the cart item
  cartItem.innerHTML = `
    <td>${name}</td>
    <td>$${price.toFixed(2)}</td>
  `;
 
  // Add cart item to the cart body
  cartBody.appendChild(cartItem);
 
  // Update total price
  let currentTotalPrice = parseFloat(totalPriceElement.textContent);
  totalPriceElement.textContent = (currentTotalPrice + price).toFixed(2);
 
  // Reset cartItems and checkoutData
  cartItems = [];
  checkoutData = [];
  localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
 }

function hapus() {
  const cartBody = document.getElementById('cartBody');
  const totalPriceElement = document.getElementById('totalPrice');
 
  // Clear previous content
  cartBody.innerHTML = '';
 
  // Update total price
  totalPriceElement.textContent = 0;
 
  // Reset cartItems and checkoutData
  cartItems = [];
  checkoutData = [];
  localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
 }

 //checkout form
 function ambilDataCart() {
  const cartBody = document.getElementById('cartBody');
  const cartItems = cartBody.getElementsByTagName('tr');
  const dataCart = [];
 
  for (let i = 0; i < cartItems.length; i++) {
     const cartItem = cartItems[i];
     const name = cartItem.getElementsByTagName('td')[0].textContent;
     const price = parseFloat(cartItem.getElementsByTagName('td')[1].textContent.replace('$', ''));
 
     dataCart.push({ name, price });
  }
 
  return dataCart;
}

// search Menu
document.addEventListener('DOMContentLoaded', function () {
 const searchInput = document.getElementById('searchInput');
 const menuItems = document.querySelectorAll('.menu-item');

 searchInput.addEventListener('input', function () {
     const searchTerm = searchInput.value.toLowerCase();

     menuItems.forEach(function (menuItem) {
         const menuItemText = menuItem.textContent.toLowerCase();
         const isMatch = menuItemText.includes(searchTerm);

         if (isMatch) {
             menuItem.style.display = 'block';
         } else {
             menuItem.style.display = 'none';
         }
     });
 });
});


/*feedback Javascript*/
/*feedback Javascript*/
function validateForm() {

    var fname =  document.forms["myForm"]["fname"];
    var lname =  document.forms["myForm"]["lname"];
    var email =  document.forms["myForm"]["email"];
  
    validateName(fname,lname);
    validateEmail(email);
  
  }
  
  function validateName(fname,lname){
  
    var letters = /^[A-Za-z]+$/;
   if(fname.value.match(letters) && lname.value.match(letters) ){
      return true;
    }
    else{
      alert('Please use alphabet characters only for name');
      fname.focus();
      lname.focus();
      return false;
    }
  }
  
    function validateEmail(email){
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (email.value.match(mailformat)) {
          return true;
        }
        else {
          alert("Please enter valid email address")
            email.focus() ;
               return false ;
        }
  
  }
  
  function validateAll(myForm) {
    var fname =  document.forms["myForm"]["fname"];
    var lname =  document.forms["myForm"]["lname"];
    var email =  document.forms["myForm"]["email"];
    var checkbox = document.forms["myForm"]["checkbox"];
    var message = document.forms["myForm"]["message"];
  
  
      var letters = /^[A-Za-z]+$/;
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
      if (fname.value.match(letters) && lname.value.match(letters) && email.value.match(mailformat)
          && myForm.checkbox.checked == true && message.value!="") {
        alert("Success! Thank you ");
        return true;
      }
  }

  function validateAll(myForm) {
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const fname = document.getElementById('fname').value;
    const message = document.getElementById('message').value;

    const formData = { lname, email, fname, message };

    fetch('http://localhost:4000/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => { 
        console.log('Success:', data);
        alert('Feedback submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting feedback');
    });
}
//News JS

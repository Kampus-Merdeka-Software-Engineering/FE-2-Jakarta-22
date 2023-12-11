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
  const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');
  const cartItem = document.createElement('tr');

  // Calculate tax and total price after tax
  const taxRate = 0.10;
  const tax = price * taxRate;
  const totalPriceAfterTax = price + tax;

  // Add item name, price, tax, and total price after tax to the cart item
  cartItem.innerHTML = `
    <td>${name}</td>
    <td>$${price.toFixed(2)}</td>
    <td><button <i class="fa-solid fa-xmark"onclick="removeChart(this)"></i></button></td>
  `;

  // Add cart item to the cart body
  cartBody.appendChild(cartItem);

  // Calculate total price, total price after tax
  const currentTotalPriceAfterTax = parseFloat(totalPriceAfterTaxElement.textContent) || 0;

  // Update total price, total price after tax, and total price after discount
  totalPriceAfterTaxElement.textContent = (currentTotalPriceAfterTax + totalPriceAfterTax).toFixed(2);
}


function removeChart(btn) {
 const cartItem = btn.parentElement.parentElement;
 const cartBody = document.getElementById('cartBody');
 const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');

 // Remove item from cart body
 cartBody.removeChild(cartItem);

 // Calculate total price after tax
 const price = parseFloat(cartItem.children[1].textContent.substring(1));
 const taxRate = 0.10;
 const tax = price * taxRate;
 const totalPriceAfterTax = price + tax;

 // Update total price after tax
 const currentTotalPriceAfterTax = parseFloat(totalPriceAfterTaxElement.textContent);
 totalPriceAfterTaxElement.textContent = (currentTotalPriceAfterTax - totalPriceAfterTax).toFixed(2);
}


function hapus() {
  const cartBody = document.getElementById('cartBody');
  const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');
 
  // Set total price after tax to 0
  totalPriceAfterTaxElement.textContent = 0;
 
  // Remove all cart items from the cart body
  while (cartBody.firstChild) {
     cartBody.removeChild(cartBody.firstChild);
  }
}

//  //checkout form
//  function ambilDataCart() {
//   const cartBody = document.getElementById('cartBody');
//   const cartItems = cartBody.getElementsByTagName('tr');
//   const dataCart = [];
 
//   for (let i = 0; i < cartItems.length; i++) {
//      const cartItem = cartItems[i];
//      const name = cartItem.getElementsByTagName('td')[0].textContent;
//      const price = parseFloat(cartItem.getElementsByTagName('td')[1].textContent.replace('$', ''));
 
//      dataCart.push({ name, price });
//   }
 
//   return dataCart;
// }

// search Menu
function searchProduct(input) {
  const filter = input.value.toUpperCase();
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (menuItem) {
      const menuItemText = menuItem.getElementsByClassName('productName')[0].textContent;
      if (menuItemText.toUpperCase().indexOf(filter) > -1) {
          menuItem.style.display = "";
      } else {
          menuItem.style.display = "none";
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function () {
      searchProduct(this);
  });
});
 


/*feedback Javascript*/
/*feedback Javascript*/
// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const formData = {
//     username: document.getElementById('username').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value,
//     category: document.getElementById('category').value,
//   };

//   fetch('/feedbacks', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Feedback submitted successfully:', data);
//     // Handle success, e.g., show a success message to the user
//   })
//   .catch(error => {
//     console.error('Error submitting feedback:', error);
//     // Handle error, e.g., show an error message to the user
//   });
// });

function validateForm() {

    var fname =  document.forms["myForm"]["fname"];
    var email =  document.forms["myForm"]["email"];
  
    validateName(fname);
    validateEmail(email);
  
  }
  
  function validateName(fname){
  
    var letters = /^[A-Za-z]+$/;
   if(fname.value.match(letters)){
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
    var email =  document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];
  
  
      var letters = /^[A-Za-z]+$/;
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
      if (fname.value.match(letters) && lname.value.match(letters) && email.value.match(mailformat)
          && myForm.checkbox.checked == true && message.value!="") {
        alert("Success! Thank you ");
        return true;
      }
}
//News JS

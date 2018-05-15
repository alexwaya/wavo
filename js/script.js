  
  
  //firebase starts here
  var config = {
				apiKey: "AIzaSyCLbDrA3RLhCmfEli6rrpR7aQ9H3nWCycE",
				authDomain: "wavo-74a42.firebaseapp.com",
				databaseURL: "https://wavo-74a42.firebaseio.com",
				projectId: "wavo-74a42",
				storageBucket: "",
				messagingSenderId: "546175523452"
			};
			firebase.initializeApp(config);
      var database = firebase.database();
      

    //   var signupForm = document.getElementById("modal-content");
    //   var onSignupComplete =function(){
    //     signupSuccess.innerHTML = 'Thanks for signing up!';
    //     // hide the form
    //     signupForm.style.display = 'none';
    //   };

    //   function signup(formObj) {
    //     // Store emails to firebase
    //     var myFirebaseRef = new Firebase("https://wavo-74a42.firebaseio.com/signups");
    //     myFirebaseRef.push({
    //       email: formObj.email.value,
    //     }, onSignupComplete);
    //     signupbtn.disabled = true;
    //     return false;
    // }


//firebase ends here

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
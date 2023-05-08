
const firebaseConfig = {
   apiKey: "AIzaSyDDgkyBezMHoVRN20y912bNDt_vOh9qLwg",
   authDomain: "find-the-bone-6389e.firebaseapp.com",
   projectId: "find-the-bone-6389e",
   storageBucket: "find-the-bone-6389e.appspot.com",
   messagingSenderId: "414518577730",
   appId: "1:414518577730:web:b1e0e1ae98624b24d3fbdb",

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()


function register() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value


    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Out of Line!!')
        return

    }
    if (validate_field(full_name) == false ) {
        alert('One or More Extra Fields is Out of Line!!')
        return
    }


    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name,
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            alert('User account created, You can proceed to login.')
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
function login() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is incorrect')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var uid = user.uid;

            var database_ref = database.ref()

            var user_data = {
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).update(user_data)


            console.log("done");
            window.location.href="instructions.html";


        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}


// // Add a listener for the beforeunload event
// window.addEventListener('beforeunload', function(event) {
//   // Prompt the user to confirm before leaving the page
//   event.preventDefault();
//   event.returnValue = '';
// });
//
// // Add a listener for the page load event
// window.addEventListener('load', function() {
//   // Check if the user confirmed before leaving the page
//   const confirmed = sessionStorage.getItem('confirmed');
//   if (confirmed === 'true') {
//     // Continue with the same state
//     console.log('Continue with the same state');
//   } else {
//     // Reset the start and start fresh
//     console.log('Reset the start and start fresh');
//   }
// });
//
// // Add a listener for the reload button click event
// const reloadButton = document.querySelector('button[type="reload"]');
// if (reloadButton) {
//   reloadButton.addEventListener('click', function() {
//     // Prompt the user to confirm before reloading the page
//     sessionStorage.setItem('confirmed', 'true');
//   });
// }
//


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

function next(){
  window.location.href="game.html";
}

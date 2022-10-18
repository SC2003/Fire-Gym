//Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyB3E_MCGzx5tQ8OjFjIDKMLKy_Q8LQ55GI",
  authDomain: "fire-gym.firebaseapp.com",
  projectId: "fire-gym",
  storageBucket: "fire-gym.appspot.com",
  messagingSenderId: "258608564694",
  appId: "1:258608564694:web:383cc2dba52f72c1cb7c77",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Initializing Firestore
var firestore = firebase.firestore();

/**********************Contact Form**********************/
//Variable to access database collection
const db = firestore.collection("formData");
// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
// Submit form
function submitForm(e) {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  //Get Form Values
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Message = document.getElementById("message").value;
  //Save Form Data To Firebase
  db.doc()
    .set({
      name: Name,
      email: Email,
      message: Message,
    })
    .then(() => {
      console.log("Message Sent");
    })
    .catch((error) => {
      console.log(error);
    });
  // Show alert
  document.querySelector(".alert").style.display = "block";
  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 4000);
  // Clear form(using timeout cuz the form email doesn't get the data quick enough)
  setTimeout(function () {
    document.getElementById("contactForm").reset();
  }, 1000);
}
/**********************Contact Form End**********************/
/**********************Authentication(?)**********************/
/**********************Register(?)**********************/
//const db = firestore.collection("user");
/**********************Register End**********************/
/**********************Login(?)**********************/
//const db = firestore.collection("users");
/**********************Login End**********************/
/**********************Authentication End**********************/

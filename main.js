 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCOAveCExWctLj-g9Fvgmc7OZdR-RjdXQw",
   authDomain: "contactform-ebe18.firebaseapp.com",
   databaseURL: "https://contactform-ebe18.firebaseio.com",
   projectId: "contactform-ebe18",
   storageBucket: "contactform-ebe18.appspot.com",
   messagingSenderId: "713079836474",
   appId: "1:713079836474:web:97428ecf2f0a2757aa0a03"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore();

 // Reference messages collection
 const messagesRef = firestore.collection('messages');
 //  const messagesRef = firebase.database.ref('contactForm');

 //Listen for form submit
 document.getElementById("contactForm").addEventListener("submit", submitForm);

 //Submit form
 function submitForm(e) {
   e.preventDefault();

   //Get Values
   var firstName = getInputVal("firstName");
   var lastName = getInputVal("lastName");
   var address = getInputVal("address");
   var email = getInputVal("email");
   var phone = getInputVal("phone");
   var gradYear = getInputVal("gradYear");

   //Save Message
   saveMessage(firstName, lastName, address, email, phone, gradYear);

   //Show alert

   document.querySelector('.alert').style.display = 'block';

   // hide alert after 3sc
   setTimeout(function () {
     document.querySelector('.alert').style.display = 'none';

   }, 3000);

   //Clear Form
   document.getElementById('contactForm').reset();
 }




 //Function to get form values
 function getInputVal(id) {
   return document.getElementById(id).value;
 }

 //save message to firebase
 function saveMessage(firstName, lastName, address, email, phone, gradYear) {
   var newMessageRef = messagesRef;
   newMessageRef.doc().set({
     firstName: firstName,
     lastName: lastName,
     address: address,
     email: email,
     phone: phone,
     gradYear: gradYear
   });
 }
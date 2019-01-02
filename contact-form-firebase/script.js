var config = {
  apiKey: "AIzaSyAFgQAIfsZlnrCEF9_IjvXq4p0K83C9YJE",
  authDomain: "contact-form-d58d4.firebaseapp.com",
  databaseURL: "https://contact-form-d58d4.firebaseio.com",
  projectId: "contact-form-d58d4",
  storageBucket: "contact-form-d58d4.appspot.com",
  messagingSenderId: "898980600629"
};
firebase.initializeApp(config);

//create tree name for message collection in fire base
var messageRef = firebase.database().ref('messages')


document.querySelector('#contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
  e.preventDefault();
  var name = getInputval('name');
  var company = getInputval('company');
  var email = getInputval('email');
  var phone = getInputval('phone');
  var message = getInputval('message');

  // console.log(email)
 saveMessage(name, company, email, phone, message)
 alert('your message has been sent');

 document.querySelector('#contactForm').reset()
}

function getInputval(id){
  // return document.getElementById(id).value;
  return document.querySelector(`#${id}`).value;
}

//save message to firebase

function saveMessage(name, company, email, phone, message){
  let newMessage = messageRef.push();
  newMessage.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  })
}
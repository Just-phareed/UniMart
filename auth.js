import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import {

getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";




const firebaseConfig = {


apiKey:"AIzaSyDLWy48kGrrraPUDi4QljMuWUfXnOYr5Lg",

authDomain:"unimart-34959.firebaseapp.com",

projectId:"unimart-34959",

storageBucket:"unimart-34959.firebasestorage.app",

messagingSenderId:"522549272773",

appId:"1:522549272773:web:b4b8f931c6c64cf2a250ac"


};




const app =
initializeApp(firebaseConfig);



const auth =
getAuth(app);




const email =
document.getElementById("email");


const password =
document.getElementById("password");


const msg =
document.getElementById("msg");





// SIGN UP

document
.getElementById("signupBtn")
.onclick = async()=>{


try{


await createUserWithEmailAndPassword(
auth,
email.value,
password.value
);



msg.innerText =
"Account created 🚀";



localStorage.setItem(
"user",
email.value
);



setTimeout(()=>{

window.location.href="index.html";

},1000);



}

catch(error){

msg.innerText =
error.message;

}


};






// LOGIN


document
.getElementById("loginBtn")
.onclick = async()=>{


try{


await signInWithEmailAndPassword(
auth,
email.value,
password.value
);



localStorage.setItem(
"user",
email.value
);



msg.innerText =
"Login successful 🔥";



setTimeout(()=>{

window.location.href="index.html";

},1000);



}


catch(error){

msg.innerText =
error.message;

}


};
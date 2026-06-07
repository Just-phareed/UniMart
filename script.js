// ================= FIREBASE =================

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import {
getFirestore,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



const firebaseConfig = {

apiKey:"AIzaSyDLWy48kGrrraPUDi4QljMuWUfXnOYr5Lg",

authDomain:"unimart-34959.firebaseapp.com",

projectId:"unimart-34959",

storageBucket:"unimart-34959.firebasestorage.app",

messagingSenderId:"522549272773",

appId:"1:522549272773:web:b4b8f931c6c64cf2a250ac"

};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




// ================= POST ITEM =================


const postForm =
document.getElementById("postForm");



if(postForm){


postForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const item = {


name:
document.getElementById("itemName").value,


price:
document.getElementById("itemPrice").value,


category:
document.getElementById("itemCategory").value,


image:
document.getElementById("itemImage").value,


description:
document.getElementById("itemDesc").value,


seller:
localStorage.getItem("user") || "Unknown"



};



await addDoc(
collection(db,"products"),
item
);



alert("Item posted successfully 🚀");


window.location.href="index.html";


});


}






// ================= SEARCH =================


const searchInput =
document.getElementById("searchInput");



if(searchInput){


searchInput.addEventListener(
"keyup",
()=>{


let value =
searchInput.value.toLowerCase();



document
.querySelectorAll(".product-card")
.forEach(card=>{


if(
card.innerText
.toLowerCase()
.includes(value)

){

card.style.display="block";


}

else{


card.style.display="none";


}


});


});


}







// ================= LOGOUT =================


window.logout = function(){


localStorage.removeItem("user");


window.location.href="auth.html";


}
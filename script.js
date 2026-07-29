// =====================================
// Student Profile Generator
// DOM Assignment
// =====================================

// ---------- Input Fields ----------

const studentName = document.getElementById("name");
const studentAge = document.getElementById("age");
const studentSubject = document.getElementById("subject");
const favouriteColor = document.getElementById("color");
const profilePhoto = document.getElementById("photo");

// ---------- Buttons ----------

const createBtn = document.getElementById("createBtn");
const themeBtn = document.getElementById("themeBtn");
const hideBtn = document.getElementById("hideBtn");
const resetBtn = document.getElementById("resetBtn");

// ---------- Profile Card ----------

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displaySubject = document.getElementById("displaySubject");
const displayColor = document.getElementById("displayColor");

const greeting = document.getElementById("greeting");
const cardGreeting = document.getElementById("cardGreeting");

const todayDate = document.getElementById("todayDate");
const cardDate = document.getElementById("cardDate");

const charCount = document.getElementById("charCount");

const profileImage = document.getElementById("profileImage");

const profileCard = document.getElementById("profileCard");

// ---------- Today's Date ----------

const today = new Date();

todayDate.innerHTML = today.toDateString();

cardDate.innerHTML = today.toDateString();

// ---------- Greeting ----------

let hour = today.getHours();

let message = "";

if(hour < 12){

    message = "🌞 Good Morning";

}
else if(hour < 18){

    message = "☀️ Good Afternoon";

}
else{

    message = "🌙 Good Evening";

}

greeting.innerHTML = message;

cardGreeting.innerHTML = message;
// =====================================
// Character Counter
// =====================================

studentName.addEventListener("input", function(){

    charCount.innerHTML = "Characters : " + studentName.value.length;

});

// =====================================
// Live Preview
// =====================================

studentName.addEventListener("input", function(){

    displayName.innerHTML = studentName.value;

});

studentAge.addEventListener("input", function(){

    displayAge.innerHTML = studentAge.value;

});

studentSubject.addEventListener("input", function(){

    displaySubject.innerHTML = studentSubject.value;

});


// =====================================
// Favourite Color
// =====================================

favouriteColor.addEventListener("change", function(){

    displayColor.innerHTML = favouriteColor.value;

    profileCard.style.border = "5px solid " + favouriteColor.value.toLowerCase();

});


// =====================================
// Profile Picture Upload
// =====================================

profilePhoto.addEventListener("change", function(){

    const file = profilePhoto.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(event){

            profileImage.src = event.target.result;

        };

        reader.readAsDataURL(file);

    }

});
// =====================================
// Create Profile Button
// =====================================

createBtn.addEventListener("click", function(){

    if(studentName.value==="" || studentAge.value==="" || studentSubject.value===""){

        alert("Please fill all the fields!");
        return;

    }

    displayName.innerHTML = studentName.value;
    displayAge.innerHTML = studentAge.value;
    displaySubject.innerHTML = studentSubject.value;
    displayColor.innerHTML = favouriteColor.value;

    cardGreeting.innerHTML = message + ", " + studentName.value + " 👋";

});


// =====================================
// Dark Mode
// =====================================

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});


// =====================================
// Hide / Show Profile
// =====================================

hideBtn.addEventListener("click", function(){

    if(profileCard.style.display === "none"){

        profileCard.style.display = "block";
        hideBtn.innerHTML = "👁 Hide Profile";

    }

    else{

        profileCard.style.display = "none";
        hideBtn.innerHTML = "👀 Show Profile";

    }

});


// =====================================
// Reset Button
// =====================================

resetBtn.addEventListener("click", function(){

    studentName.value = "";
    studentAge.value = "";
    studentSubject.value = "";
    favouriteColor.value = "Red";
    profilePhoto.value = "";

    displayName.innerHTML = "Not Entered";
    displayAge.innerHTML = "Not Entered";
    displaySubject.innerHTML = "Not Entered";
    displayColor.innerHTML = "Not Selected";

    charCount.innerHTML = "Characters : 0";

    greeting.innerHTML = message;
    cardGreeting.innerHTML = message;

    todayDate.innerHTML = today.toDateString();
    cardDate.innerHTML = today.toDateString();

    profileCard.style.border = "none";
    profileCard.style.display = "block";

    hideBtn.innerHTML = "👁 Hide Profile";

    profileImage.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

});
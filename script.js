
  function toggleLogin() {   
    const modal = document.getElementById("loginModal");   
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";   
  }   
   
  function loginUser() {   
    const user = document.getElementById("username").value;   
    alert("Welcome, " + user + "!");   
    toggleLogin();   
    return false; // prevent actual form submission   
  }   

    // Show selected course content   
    function showCourse(id) {   
      const contents = document.querySelectorAll('.course-content');   
      contents.forEach(el => el.style.display = 'none');   
      document.getElementById(id).style.display = 'block';   
    }  // Funny text animation   
const messages = [   
  "Learning C isn't that hard... until pointers say hello!",   
  "Java: Write once, debug everywhere!",   
  "Python is easy. Just don't ask it to marry JavaScript.",   
  "C++: The love child of C and object-oriented headaches."   
];   
 
let msgIndex = 0;   
setInterval(() => {   
  msgIndex = (msgIndex + 1) % messages.length;   
  document.getElementById("funnyText").innerText = messages[msgIndex];   
}, 5000); 
function toggleLogin() { 
const modal = document.getElementById("loginModal"); 
modal.style.display = modal.style.display === "flex" ? "none" : "flex"; 
} 
function loginUser() { 
const username = document.getElementById("username").value.trim(); 
if (!username) return false; 
const firstName = username.split(" ")[0]; 
document.getElementById("greeting").innerText = "Hello, " + firstName ; 
document.getElementById("userBox").style.display = "inline-block"; 
toggleLogin();   
return false; 
} 
function logoutUser() { 
document.getElementById("userBox").style.display = "none"; 
alert("You have been logged out."); 
} 
let seconds = 0; 
function updateTimer() { 
seconds++; 
const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0'); 
const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); 
const secs = String(seconds % 60).padStart(2, '0'); 
document.getElementById("timer").innerText = `${hrs}:${mins}:${secs}`; 
} 
setInterval(updateTimer, 1000); 
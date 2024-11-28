const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const btn = document.getElementById("btnLogin");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value=="Admin" && passWord.value=="Pass"){
        alert("You have logged in successfully!");
          window.location="/Lesson3/content/mainPage/index.html";
          } else {
            alert("Please fill all the fields");
          }
        
        });
        
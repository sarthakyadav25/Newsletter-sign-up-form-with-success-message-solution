function submit(){
    email = document.getElementById('inp').value;
     let regex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
     if (regex.test(email)){
        window.location.href = "/success.html"
     }
     else{
         const cont = document.getElementById('email');
         const field = document.getElementById('inp')
         field.style = "border:2px solid red";
         field.style = "color:red";
         const valid = document.createElement("h6");
         valid.append("valid email address required")
         valid.style = "color:red";
         cont.appendChild(valid);
     }
 }


//Main code

let arr = document.getElementsByClassName("btn");
const button = Array.from(arr)[0];
button.addEventListener('click',submit);
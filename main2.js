function homepage(){
    window.location.href = "/";
}

//Main code

const dismiss = document.getElementById('btn');
const button = dismiss.firstElementChild;
button.addEventListener('click',homepage);
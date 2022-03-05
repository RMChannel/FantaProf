pass=document.getElementById('pass');
send=document.getElementById('send');
send.addEventListener("click", check);

function check() {
    if (pass.value==="wlafiga") {
        window.location.replace("index.html");
    }
    else {
        alert("Password errata");
    }
}
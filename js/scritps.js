
function toggleButton(e) {
    
    const menu = document.getElementById('menu');
    e.currentTarget.classList.toggle('show');
    menu.classList.toggle('show');
}


function init(){
    const btnHamburger = document.querySelector("#hamburger");
   
    btnHamburger.addEventListener('click', toggleButton)
}

window.onload = init;
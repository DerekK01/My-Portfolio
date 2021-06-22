const menu  =document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const accordion = document.getElementsByClassName ('contentBox')

for (i=0;i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
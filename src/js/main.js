var mobileMenu = document.getElementById('mobile_menu');
var mobileMenuList = document.getElementById('mobile_menu-list');

mobileMenu.addEventListener('click', showMenu);

function showMenu() {
    mobileMenu.classList.toggle('menu-on');
    mobileMenuList.classList.toggle('active');
}

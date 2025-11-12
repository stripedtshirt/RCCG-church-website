const hamburger = document.getElementById('hamburger');
const closeHamburger = document.getElementById('close-hamburger');

hamburger.addEventListener('click', showSidebar)
closeHamburger.addEventListener('click', hideSidebar)

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
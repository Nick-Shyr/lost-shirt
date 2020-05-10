// IIFE - самовызывающаяся функция
(function(){
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    function openSidebar() {
        sidebar.classList.add('sidebar--opened');
    }
    
    function closeSidebar() {
        sidebar.classList.remove('sidebar--opened');
    }
    
    openingBtn.addEventListener('click', openSidebar);
    closingBtn.addEventListener('click', closeSidebar);
}())
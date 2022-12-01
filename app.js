const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})


// const toggle = document.getElementById('toggleMenu');
// const menuList = document.getElementById('menuList').style;

// menuList.display = 'none';

// toggle.addEventListener('click', () => {
//     if(!menuList.display){
//         menuList.display = 'none'
//     }
//     else {
//         menuList.display = ''
//     }
// })
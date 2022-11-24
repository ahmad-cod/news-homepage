const toggle = document.getElementById('toggleMenu');
const menuList = document.getElementById('menuList').style;

menuList.display = 'none';

toggle.addEventListener('click', () => {
    if(!menuList.display){
        menuList.display = 'none'
    }
    else {
        menuList.display = ''
    }
})
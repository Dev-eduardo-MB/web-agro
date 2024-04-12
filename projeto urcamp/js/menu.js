

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "icons-menu/clipart365828.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icons-menu/Picsart_23-09-21_15-37-05-802.png";
    }
}
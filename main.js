const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuChildren = Array.from(document.querySelectorAll('.mobileMenu>*'));

const openMobileMenu = () => {
    mobileMenu.style.transform = 'scaleX(1)';
    setTimeout(() => {
        mobileMenuChildren.forEach((item) => {
            item.style.opacity = '1';
        })
    }, 300);
}

const closeMobileMenu = () => {
    mobileMenuChildren.forEach((item) => {
        item.style.opacity = '0';
    });
    setTimeout(() => {
        mobileMenu.style.transform = 'scaleX(0)';
    }, 300);
}

Array.from(document.querySelectorAll('.mobileMenu>main>ul>.topMenu__menu__list__item')).forEach((item) => {
    item.addEventListener('click', function() {
        closeMobileMenu();
    });
});

AOS.init();

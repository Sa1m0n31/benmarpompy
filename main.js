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

const splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
    autoplay: true,
    interval: 3000
});

splide.mount();

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.110450, lng: 19.086053 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

import { switchLi } from './functions.js';

const mainNavItems = document.querySelectorAll('.main-header .nav-item a');
const mainNavItemMenuWhite = document.querySelector('.main-header .menu-white');
const mainNavItemMenuBlack = document.querySelector('.main-header .menu-black');
const ukContainers = document.querySelectorAll('.uk-container');
const mainNavLogoWhite = document.querySelector('.main-nav-logo-white');
const mainNavLogoBlack = document.querySelector('.main-nav-logo-black');
let large = 1536
let medium = 1440
if (window.innerWidth < large) {
    ukContainers.forEach(element => {
        element.classList.remove('uk-container-large')
    });
}
const mainHeader = document.getElementById('mainHeader');
if (mainHeader) {
    mainNavLogoBlack.style.display = 'none'
    mainNavItemMenuBlack.style.display = 'none';
    window.addEventListener('scroll', event => {
        if (scrollY > 0) {
            mainNavItems.forEach(function(element) {
                element.style.color = '#1d1d1b'
            });
            mainNavLogoWhite.style.display = 'none';
            mainNavLogoBlack.style.display = 'block'
            mainNavItemMenuWhite.style.display = 'none';
            mainNavItemMenuBlack.style.display = 'block';
        } else {
            mainNavItems.forEach(function(element) {
                element.style.color = 'inherit'
            });
            mainNavLogoWhite.style.display = 'block';
            mainNavLogoBlack.style.display = 'none'
            mainNavItemMenuWhite.style.display = 'block';
            mainNavItemMenuBlack.style.display = 'none';
        }
    });
}
const faqSection = document.getElementById('FAQQuerstions');
if (faqSection) {
    const ulTabs = faqSection.querySelector('.uk-tab');
    const tabLis = ulTabs.querySelectorAll('li');
    const wrapper = document.getElementById('FAQSwitcher');
    const contentLis = wrapper.querySelectorAll('.faqItem');
    const urlItem = window.location.hash.substr(1);

    const faqItem1 = document.querySelector('.faqItem1');
    faqItem1.classList.remove('uk-active')
    const faqItem2 = document.querySelector('.faqItem2');
    faqItem2.classList.add('uk-active')
    
    let lis = [];
    
    const elems = {
        about: 0,
        events: 1,
        courses: 2,
        adServices: 3,
        commercialShows: 4,
        eventOrganization: 5
    }
    
    tabLis.forEach(li => lis.push(li));
    switchLi(lis, urlItem, elems);
    
    lis = []
    contentLis.forEach(li => lis.push(li));
    switchLi(lis, urlItem, elems);
}

window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};
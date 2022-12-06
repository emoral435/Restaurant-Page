import pageLoad from "./modules/initial-page";
import homePage from "./modules/home-page";
import menuPage from "./modules/menu-page";
import contactPage from "./modules/contact-page";

pageLoad()

let homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', () => {
    let mainContent = document.querySelector('.mainContent');
    mainContent.className = 'mainContent genericHeight'
    mainContent.removeChild(mainContent.lastChild)
    mainContent.appendChild(homePage())
    let header = document.querySelector('.header')
    header.textContent = 'About Us'
})

let menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    let mainContent = document.querySelector('.mainContent');
    mainContent.className = 'mainContent menuHeight'
    mainContent.removeChild(mainContent.lastChild)
    mainContent.appendChild(menuPage())
    let header = document.querySelector('.header')
    header.textContent = 'Menu'
})

let contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
    let mainContent = document.querySelector('.mainContent');
    mainContent.className = 'mainContent genericHeight'
    mainContent.removeChild(mainContent.lastChild)
    mainContent.appendChild(contactPage())
    let header = document.querySelector('.header')
    header.textContent = 'Contact Us'
})
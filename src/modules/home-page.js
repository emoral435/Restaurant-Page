import { makeDiv } from "./initial-page";

export default function homePage() {
    // change the height of the container
    // main section of thhe home page section
    let homeSection = makeDiv('homeSection');
    // this is the fbi picture
    let fbi = new Image(120,120);
    fbi.src = '/src/images/fbi.png'
    let fbiDiv = makeDiv('fbi')
    fbiDiv.append(fbi)
    // this loads the alien image
    let alien = new Image(120, 120);
    alien.src = '/src/images/alien.png';
    let alienDiv = makeDiv('alien');
    alienDiv.append(alien);
    // this stores the text for the about us section
    let text = makeDiv('homeText');
    text.textContent = 'We have the best food to bring you back to simpler times! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // append the divs into the document
    homeSection.append(fbiDiv, text, alienDiv)
    return homeSection;
}
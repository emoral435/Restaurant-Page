import { makeDiv } from "./initial-page";

export default function menuPage() {
    // make the main menuPage div
    let menuDiv = makeDiv('menuSection');
    // define the six pictures
    let deoxys = new Image(300, 300)
    deoxys.src = '/src/images/deoxys.png'
    let sushi = new Image(300, 270)
    sushi.src = '/src/images/sushi.png'
    let pizza = new Image(300, 300)
    pizza.src = '/src/images/pizza.png'
    let squid = new Image(280, 300)
    squid.src = '/src/images/squidward.png'
    let mcdy = new Image(300, 285)
    mcdy.src = '/src/images/donaldmcdonald.png'
    let drink = new Image(156, 300)
    drink.src = '/src/images/drink.png'
    let picArr = [sushi, mcdy, drink, pizza, squid, deoxys]
    for (let i = 0; i < picArr.length; i++) {
        picArr[i].classList.add('zoom')
        let background = makeDiv('background')
        let text = makeDiv('content')
        text.classList.add('fade', 'slideBot')
        text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
        background.dataset.id = i
        background.append(picArr[i])
        background.append(text)
        menuDiv.append(background)
    }
    return menuDiv;
}
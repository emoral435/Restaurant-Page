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
    for (let i =0; i < picArr.length; i++) {
        let background = makeDiv('background')
        background.dataset.id = toString(i)
        background.append(picArr[i])
        menuDiv.append(background)
    }
    return menuDiv;
}
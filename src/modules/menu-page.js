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
    let menuArr = ['Sushi', 'Burger Combo', 'Moon Drink',  'Little Ceasars Pizza', 'Squid..Ward?', 'Deoxys??']
    let priceArr = ['$11.99','$12.99','$2.99', '$5.99', '$499.99', "$???"]
    let quoteArr = ['Now does this not remind you of the good days?', 'The classic combo, only better.', "This appears to be boba, but it also appears that we do not have the liscence to sell boba... go along with it.", "Only the best pizza sold in the Milky Way galaxy!", "We have no words for this terrible accident.", "A wild deoxys has appeared!"]
    for (let i = 0; i < picArr.length; i++) {
        picArr[i].classList.add('zoom', 'blur')
        let background = makeDiv('background')
        let text = makeDiv('content')
        text.classList.add('fade', 'slideBot')
        let textHeader = makeDiv('textHeader')
        let textLeft = makeDiv('textLeft')
        textLeft.textContent = menuArr[i] + '...'
        let textRight = makeDiv('textRight')
        textRight.textContent = priceArr[i]
        textHeader.append(textLeft, textRight)
        let textBody = makeDiv('textBody')
        textBody.textContent = quoteArr[i]
        text.append(textHeader, textBody)
        background.dataset.id = i
        background.append(picArr[i])
        background.append(text)
        menuDiv.append(background)
    }
    return menuDiv;
}
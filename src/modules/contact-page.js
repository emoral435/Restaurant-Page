import { makeDiv } from "./initial-page";

export default function contactPage() {
    // making the contact div that gets appended to the main content section of the page
    let contactDiv = makeDiv("contactSection");
    // making the phone number section that provides random phone numbers
    let phoneNum = makeDiv('phoneNum')
    let phoneHeader = makeDiv('phoneHeader')
    let phoneTitle = makeDiv('phoneTitle')
    phoneTitle.textContent = 'Phone Numbers'
    let phoneImg = new Image(150, 120);
    phoneImg.src = './src/images/phone.png'
    phoneImg.classList.add('phoneImg')
    phoneHeader.append(phoneTitle, phoneImg);
    phoneNum.append(phoneHeader);
    let phoneList = makeDiv('phoneList')
    let phoneArray = ['+(847) 833-3438', '+(775) 837-2384', '+(778) 330-2389', "+(123) 456-7890", 'Feel Free To Call!']
    for (let i = 0; i < phoneArray.length; i++) {
        let phoneNumber = makeDiv('phoneNumber')
        phoneNumber.textContent = phoneArray[i]
        phoneList.appendChild(phoneNumber)
    } phoneNum.append(phoneList)
    // making the address section that provides random addresses
    let address = makeDiv('address')
    let addressHeader = makeDiv('addressHeader')
    let addressTitle = makeDiv('addressTitle')
    addressTitle.textContent = 'Addresses'
    let addressImg = new Image(200, 110)
    addressImg.classList.add('addressImg')
    addressImg.src = './src/images/map.png'
    addressHeader.append(addressImg, addressTitle)
    address.append(addressHeader)
    let announced = makeDiv('Announced')
    announced.textContent = 'To Be Announced!'
    address.append(announced)
    // final appending to the contact div
    contactDiv.append(phoneNum, address)
    return contactDiv;
}


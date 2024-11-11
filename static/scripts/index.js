import { getAllContacts, renderContacts, backToContactsList } from "./consultContacts.js"
import { renderRegisterScreen } from "./registerContact.js"


var url = "http://localhost:3000/contacts"
var contactsList = document.querySelector("#contacts-list")


const contacts = await getAllContacts(url)
renderContacts(url, contacts, contactsList)

document.querySelector("#goToRegisterScreen").addEventListener("click", async () => {
    renderRegisterScreen(url)
})
document.querySelector("#goToConsultScreen").addEventListener("click", backToContactsList)

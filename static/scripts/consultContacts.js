import { renderEditScreen } from "./editContact.js";
import deleteUser from "./deleteContact.js";

async function getAllContacts (url) {
    const response = await fetch(url);
    const data = await response.json();
    
    return data
}


function renderContacts (url, contacts, contactsList) {

    contactsList.innerHTML = ""

    contacts.forEach(contact => {
        const contactToRender = document.createElement("li")
        contactToRender.classList.add("contact")
        contactToRender.innerHTML = `
        <div class="contact-info">
            <p class="contactId" style="display: none;">${contact.id}</p>
            <h3>Nome: ${contact.name}</h3>
            <ul>
                <li><p><strong>Telefone:</strong> ${contact.info.phone}</p></li>
                <li><p><strong>Email:</strong> ${contact.info.email}</p></li>
            </ul>
        </div>
        <div class="contact-actions">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Excluir</button>
        </div>
        `
        contactsList.appendChild(contactToRender)

        contactToRender.querySelector(".delete-btn").addEventListener("click", async () => {
            await deleteUser(url, contact.id)
        })

        contactToRender.querySelector(".edit-btn").addEventListener("click", async () => {
            await renderEditScreen(url, contact.id, contact.name)
        })
    });
}


function backToContactsList () {

    const contactsListDiv = document.querySelector(".contacts-list")
    const editContactDiv = document.querySelector(".edit-contact")
    const registerContactDiv = document.querySelector(".register-contact")

    contactsListDiv.setAttribute("style", "")
    editContactDiv.setAttribute("style", "display: none;")
    registerContactDiv.setAttribute("style", "display: none;")
}


export { getAllContacts, renderContacts, backToContactsList } 
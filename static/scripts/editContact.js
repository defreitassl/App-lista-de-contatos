async function editContact (url, userId, name, email, phone) {

    const requestBody = {
        id: userId,
        name: name,
        info: {
            phone: phone,
            email: email
        }
    }

    try {
        const response = await fetch(`${url}/${userId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestBody)
        })
    
        const data = await response.json()
    
        if (data) {
            alert("Contato editado com sucesso!")
        }
    } catch (error) {
        alert("Erro ao editar contato: " + error)
    }
}


async function pickEditInfo (url, editContactDiv) {
    
    const userId = editContactDiv.querySelector("#currentContact").dataset.id
    const editedName = editContactDiv.querySelector("#editedName")
    const editedPhone = editContactDiv.querySelector("#editedPhone")
    const editedEmail = editContactDiv.querySelector("#editedEmail")

    await editContact(url, userId, editedName.value, editedEmail.value, editedPhone.value)
}


async function renderEditScreen (url, userId, currentUserName) {

    const contactsListDiv = document.querySelector(".contacts-list")
    const editContactDiv = document.querySelector(".edit-contact")

    contactsListDiv.setAttribute("style", "display: none;")
    editContactDiv.setAttribute("style", "")

    const userHiddenInfo = editContactDiv.querySelector("#currentContact")
    userHiddenInfo.innerText = currentUserName
    userHiddenInfo.dataset.id = userId

    editContactDiv.querySelector("#editSubmitBtn").addEventListener("click", async () => {
        await pickEditInfo(url, editContactDiv)
    })
}


export { editContact, pickEditInfo, renderEditScreen }
async function postContact (url, name, phone, email) {

    const requestBody = {
        name: name,
        info: {
            phone: phone,
            email: email
        }
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestBody)
        })

        if (await response.json()) {
            alert("Contato cadastrado com sucesso!")
        }
    } catch (error) {
        alert("Erro ao cadastrar usuáro: " + error)
    }

}


function renderRegisterScreen (url) {

    const contactsListDiv = document.querySelector(".contacts-list")
    const editContactDiv = document.querySelector(".edit-contact")
    const registerContactDiv = document.querySelector(".register-contact")

    contactsListDiv.setAttribute("style", "display: none;")
    editContactDiv.setAttribute("style", "display: none;")
    registerContactDiv.setAttribute("style", "")

    registerContactDiv.querySelector("#registerSubmitBtn").addEventListener("click", async () => {
        pickRegisterInfo(url, registerContactDiv)
    })
}


function pickRegisterInfo (url, registerContactDiv) {
    
    const registerName = registerContactDiv.querySelector("#name")
    const registerPhone = registerContactDiv.querySelector("#phone")
    const registerEmail = registerContactDiv.querySelector("#email")

    postContact(url, registerName.value, registerPhone.value, registerEmail.value)
}


export { postContact, renderRegisterScreen, pickRegisterInfo }
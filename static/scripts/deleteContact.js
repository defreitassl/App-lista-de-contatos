export default async function deleteUser (url, userId) {
    try {
        await fetch(`${url}/${userId}`, {
            method: "DELETE"
        })
        alert(`Contato deletado com sucesso`)
    } catch (error) {
        alert(`Erro ao deletar contato ${error}`)
    } 

}
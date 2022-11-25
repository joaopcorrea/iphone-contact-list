import { GetAllContacts } from "./getAllContacts"


const searchContacts = document.createElement('form')
const displayContacts = document.createElement('ul')
contact.setAttribute('')
const header = Headers()


export const Allcontact = async () => {
    const contatos = await GetAllContacts
    searchContacts.innerHTML = (`
    <form>
        <input id="search" type="text" name="contact" placeholder="Busque um contato">
    </form>
    `)
    const form = document.getElementById(search)
    form.addEventListener('input', searchByName)
    for (contato of contatos){
    displayContacts.innerHTML = (`
    <li>
        <divclass="contatos">
            <img src="${contato.imagem}/>
            <h1>${contato.nome}</h1>
        </div>
    </li>
    `)
    }
    const selector = document.querySelector('#contatos')
    selector.forEach(element => {
        element.addEventListener('click', sendContactDetails)
    })
}


function searchByName() {
    const searchInput = document.getElementById(search)
    const filter = searchInput.value.toLowerCase()
    
    contatos.array.forEach(element => {
        let text = element.textContent
        if (text.toLowerCase().includes(filter)){
            element.display = '';
        }
        else{
            element.display = 'none';
        }
    });
}

function sendContactDetails() {
    header.append
}
import { GetAllContacts } from "../services/contacts.service.js";

const searchContacts = document.createElement('form');
const displayContacts = document.createElement('ul');
// const search = document.getElementById('search');
// contact.setAttribute('');
const header = new Headers();

export const AllContacts = async () => {
    const contatos = await GetAllContacts();

    searchContacts.innerHTML = (
        `<input id="search" type="text" name="contact" placeholder="Busque um contato">`
        );

    const form = searchContacts.querySelector('#search');
    // form.addEventListener('change', searchByName);

    for (let contato of contatos.data) {
    displayContacts.innerHTML += (
        `<li>
            <div class="contatos">
                <img src="${contato.imagem}/>
                <h1>${contato.nome}</h1>
                <p class=id">${contato.id}<p>
            </div>
        </li>`
        );
    };

    const selector = document.querySelectorAll('#contatos');

    selector.forEach(element => {
        element.addEventListener('click', sendContactDetails);
    });

    const id = document.querySelectorAll('#id');

    id.display='none';

    searchContacts.append(displayContacts);
    return searchContacts;
}

function searchByName() {
    const searchInput = document.querySelector('#search');
    const filter = searchInput.value.toLowerCase();
    
    for (let contato of contatos.data) {
        let text = contato.textContent;
        if (text.toLowerCase().includes(filter)){
            contato.display = '';
        }
        else {
            contato.display = 'none';
        };
    }
};

function sendContactDetails() {
    header.append('id', this.id);
    // window.open(`#contactId`, '_self');
};
import { GetAllContacts } from "../services/contacts.service.js";

const searchContacts = document.createElement('form');
const displayContacts = document.createElement('ul');
// const search = document.getElementById('search');
// contact.setAttribute('');
const header = new Headers();

export const AllContacts = async () => {
    const contatos = await GetAllContacts();

    const container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = (
        `
        <header class="contacts">Contacts <button>+</button></header>
        <input id="search" type="text" name="contact" placeholder="Busque um contato">
        `
        );

    const form = searchContacts.querySelector('#search');
    // form.addEventListener('change', searchByName);

    for (let contato of contatos.data) {
    displayContacts.innerHTML += (
        `<li>
            <div class="contatos">
                <h3>${contato.nome}</h1>
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

    container.append(displayContacts);
    container.innerHTML += `<section class="keyboard-size"></section>`;
    container.innerHTML += `<footer>
    <span class="icon">
      <img src="./icons/star-fill.svg">
      Favoritos
    </span>
    <span class="icon selected">
      <img src="./icons/person-crop-circle.svg">
      Contatos
    </span>
    <span class="icon">
      <img src="./icons/gear.svg">
      Configuração
    </span>
  </footer>`;
    return container;
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
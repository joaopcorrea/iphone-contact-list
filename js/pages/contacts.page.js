import { GetAllContacts } from "../services/contacts.service.js";

const searchContacts = document.createElement('form');
const displayContacts = document.createElement('ul');
// const search = document.getElementById('search');
// contact.setAttribute('');
const header = new Headers();


const events = () => {
    displayContacts.addEventListener('click', handleClick);
    // createContact.addEventListener('click', );

    // const addNumberButton = document.getElementById('btn-add-number');
    // addNumberButton.addEventListener('click', addNumber);
    // createContact.addEventListener('submit', sendForm);    
};

const handleClick = (event) => {
    console.log(event.target);
}

function deleta() {
    console.log('deletado');
  }

export const AllContacts = async () => {
    const contatos = await GetAllContacts();

    const container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = (
        `
        <header class="contacts">Contacts <a href='#novo-contato'>+</a></header>
        <input id="search" type="text" name="contact" placeholder="Busque um contato">
        `
        );

    const form = searchContacts.querySelector('#search');
    // form.addEventListener('change', searchByName);

    displayContacts.innerHTML = '';

    for (let contato of contatos.data) {
    displayContacts.innerHTML += (
        `<li >
            <div class="contatos">
                <h3>${contato.nome}</h1>
                <a href="#contato-detalhes?id=${contato.id}">Editar</a>
                <button id='delete'>X</button>
            </div>
        </li>`
        );
    };

    const deleteButton = displayContacts.querySelector('#delete');
    deleteButton.addEventListener('click', deleta);

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

    events();

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

function sendContactDetails(id) {
    header.append('id', id);
    window.open(`#contato-detalhes`, '_self');
};
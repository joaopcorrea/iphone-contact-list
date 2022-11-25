import { GetById, GetContact } from '../services/contact.service.js';

const btnEdit = document.querySelector('header button');

const buscarContato = async () => {
  const contact = (await GetById()).data;
  console.log('contatos buscados', contact);
}

btnEdit.onclick = () => {
  buscarContato();
}
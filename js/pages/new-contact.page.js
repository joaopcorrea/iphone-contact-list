import { NewContactPost } from "../services/new-contact.service.js";

const createContact = document.createElement('form');
createContact.setAttribute('id', 'p-new-contact');

const sendForm = async (event) => {
    event.preventDefault();

    const fd = new FormData(createContact);

    const type = fd.getAll('tipo');
    const number = fd.getAll('numero');

    const phones = type.map((type, i) => ({ tipo: type, numero: number[i] }));

    const obj = Object.fromEntries(fd);
    obj.telefones = phones;

    delete obj.tipo;
    delete obj.numero;

    const address = {
        logradouro: fd.logradouro,
        cidade: fd.cidade,
        estado: fd.estado,
        cep: fd.cep,
        pais: fd.pais
    };

    obj.endereco = address;

    delete obj.logradouro;
    delete obj.cidade;
    delete obj.estado;
    delete obj.cep;
    delete obj.pais;

    console.log(obj);

    const body = JSON.stringify(obj); 

    const response = await NewContactPost(body);

    if (response.status === 200) {
        window.alert('Criou!');
        // window.open('#contacts', '_self');
    }
    else window.alert('Erro!');

    const json = await response.json();
};

const addNumber = () => {

};

const events = () => {
    createContact.addEventListener('submit', sendForm);

    // const addNumberButton = document.getElementById('btn-add-number');
    // addNumberButton.addEventListener('click', addNumber);
    // createContact.addEventListener('submit', sendForm);    
};

export const NewContactHtml = () => {
    createContact.innerHTML = (
        `<input type="text" name="nome" placeholder="Nome do Contato"/>
        <input type="text" name="apelido" placeholder="Apelido"/>

        <input type="text" name="tipo" placeholder="Tipo"/>
        <input type="text" name="numero" placeholder="Telefone"/>
        <input type="text" name="tipo" placeholder="Tipo"/>
        <input type="text" name="numero" placeholder="Telefone"/>

        <input type="text" name="email" placeholder="E-mail"/>
        <input type="text" name="notas" palceholder="Notas"/>
        <input type="text" name="foto" placeholder="Insira uma imagem"/>

        <input type="text" name="logradouro" placeholder="Logradouro"/>
        <input type="text" name="cidade" placeholder="Cidade"/>
        <input type="text" name="estado" placeholder="Estado"/>
        <input type="text" name="cep" placeholder="CEP"/>
        <input type="text" name="pais" placeholder="País"/>

        <button type="submit">Criar novo contato</button>`
    );

    events();
    return createContact;
};
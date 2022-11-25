import { LoginHtml } from "./js/pages/login.page.js";
import { UserSingUpHtml } from "./js/pages/signup.page.js";
import { UserUpdateHtml } from "./js/pages/user-update.page.js";
import {AllContacts as Contacts} from './js/pages/contacts.page.js';
import { NewContactHtml } from "./js/pages/new-contact.page.js";

async function redirectPages() {
    const root = document.getElementById('root');

    const Router = {
        '#login': { component: LoginHtml, path: '#login' },
        '#signup': { component: UserSingUpHtml, path: '#signup' },
        '#contatos': { component: Contacts, path: '#contatos' },
        '#contato-detalhes': { component: () => {window.location.href = './contact-details.html#0'}, path: '#contato-detalhes' },
        '#novo-contato': { component: NewContactHtml, path: '#novo-contato' },
        '#0': { component: () => {}, path: ''},
        '#404': { component: LoginHtml, path: '#login' },
    }

    if (window.location.hash === '#0') return;

    const route = Router[window.location.hash.split('?id=')[0]] || Router['#404']

    let id = window.location.hash.split('?id=')[1];
    if (id) {
        sessionStorage.setItem("@id", id);
    }
    

    root.innerHTML = null;
    root.append(await route.component());
    window.history.pushState(null, null, route.path);
};

window.addEventListener('load', () => {
    redirectPages();
    window.addEventListener('hashchange', redirectPages);
});
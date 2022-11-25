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
        '#contato-detalhes': { component: UserUpdateHtml, path: '#contat-detalhes' },
        '#novo-contato': { component: NewContactHtml, path: '#novo-contato' },
        '#404': { component: LoginHtml, path: '#login' },
    }

    const route = Router[window.location.hash] || Router['#404']

    root.innerHTML = null;
    root.append(await route.component());
    window.history.pushState(null, null, route.path);
};

window.addEventListener('load', () => {
    redirectPages();
    window.addEventListener('hashchange', redirectPages);
});
import { LoginHtml } from "./js/pages/login.page.js";
import { UserSingUpHtml } from "./js/pages/signup.page.js";
import { UserUpdateHtml } from "./js/pages/user-update.page.js";
// import {AllContacts as Contacts} from './js/pages/contacts.page.js';
import { NewContactHtml } from "./js/pages/new-contact.page.js";

function redirectPages() {
    const root = document.getElementById('root');

    const Router = {
        '#login': { component: LoginHtml, path: '#login' },
        '#signup': { component: UserSingUpHtml, path: '#signup' },
        '#update': { component: UserUpdateHtml, path: '#update' },
        // '#contacts': { component: Contacts, path: '#contacts' }
        '#newContact': { component: NewContactHtml, path: '#newContact' }
    }

    const route = Router[window.location.hash] || Router['#404']

    root.innerHTML = null;
    root.append(route.component());
    window.history.pushState(null, null, route.path);
};

window.addEventListener('load', () => {
    redirectPages();
    window.addEventListener('hashchange', redirectPages);
});
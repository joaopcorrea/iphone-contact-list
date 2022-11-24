import { UserSingUpHtml } from "./js/pages/signup.page.js";
import { UserUpdateHtml } from "./js/pages/update.page.js";

function redirectPages() {
    const root = document.getElementById('root');

    const Router = {
        '#signup': { component: UserSingUpHtml, path: '#signup' },
        '#update': { component: UserUpdateHtml, path: '#update' }
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
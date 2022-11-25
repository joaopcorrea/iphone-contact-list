import { AuthPost } from "../services/login.service.js";

const login = document.createElement('form');
login.setAttribute('id', 'p-login');

const entrar = async (event) => {
    event.preventDefault();

    const fd = new FormData(login);

    const response = await AuthPost(fd);

    if (response.status === 200) {
        const {token, ...user} = response.data;
        
        sessionStorage.setItem("@user", JSON.stringify(user));
        sessionStorage.setItem("@token", token);

        window.alert("Abriu!");
        //window.open("#contatos", "_self");
    } 
    else {
        window.alert("Não abriu!");
        //window.open("#404", "_self");
    };
}

const events = () => {
    login.addEventListener("submit", entrar);
};

export const LoginHtml = () => {
    login.innerHTML = (
    `<input type="email" name="email" placeholder="Usuário">
    <input type="password" name="senha" placeholder="Senha">

    <button>Login</button>
    
    <p><a href="#signup" target="_self">Não possui conta? Cadastre-se!</a></p>`
    );

    events();
    return login;
};
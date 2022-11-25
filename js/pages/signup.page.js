import { UserSingUpPost } from "../services/signup.service.js";
import Compress from "compress.js";

const userForm = document.createElement('form');
userForm.setAttribute('id', 'p-user-signup');

const photoRecoveringAndResizing = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress();    
        const photoInput = userForm.querySelector('input[type="file"]');
        const files = [...photoInput.files];
    
        const options = {
            size: 2,
            quality: .75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false,
        };
    
        compress.compress(files, options)
            .then((data) => resolve(data[0]))
            .catch(() => reject(null));    
    });
};

const userRegistration = async (event) => {
    event.preventDefault();

    const fd = new FormData(userForm);

    const photo = await photoRecoveringAndResizing();
    if (photo) fd.append('foto', photo.data);

    const response = await UserSingUpPost(fd);

    if (response.status == 200) {
        window.alert('Usuário cadastrado!');
        window.open('#login', '_self');
    }
    else if (response.status == 409) window.alert('Erro! Usuário já cadastrado.');
    else window.alert('Erro!');

    const json = await response.json();
};

const events = () => {
    userForm.addEventListener('submit', userRegistration);
};

export const UserSingUpHtml = () => {
    userForm.innerHTML = (
    `<input type="text" name="email" placeholder="E-mail" required>
    <input type="password" name="senha" placeholder="Senha" required>
    <input type="text" name="nome" placeholder="Nome de usuário" required>
    <input type="file" accept="image/*" name="foto" placeholder="Foto">

    <button type="submit" class="btn-user-reg">Cadastrar meu usuário</button>

    <p><a href="#login" target="_self">Já possui conta? Faça o login!</a></p>`
    );

    events();
    return userForm;
};
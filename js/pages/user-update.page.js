import { UserPatch } from "../services/user-update.service.js";
import Compress from "compress.js";

const userForm = document.createElement('form');
userForm.setAttribute('id', 'p-user-update');

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

const userUpdate = async (event) => {
    event.preventDefault();

    const fd = new FormData(userForm);

    const photo = await photoRecoveringAndResizing();
    if (photo) fd.append('foto', photo.data);

    const response = await UserPatch(fd);

    if (response.status == 200) {
        window.alert('Informações alteradas com sucesso!');
    }
    else if (response.status == 404) window.alert('Erro! Usuário não encontrado.');
    else window.alert('Erro!');

    const json = await response.json();
};

// const filler = () => {
//     document.getElementById('user-email').value = sessionStorage.getItem('@user').email;
// };

const events = () => {
    userForm.addEventListener('submit', userUpdate);
};

export const UserUpdateHtml = () => {
    userForm.innerHTML = (
    `<input type="text" name="email" id="user-email">
    <input type="password" name="senha">
    <input type="text" name="nome">
    <input type="file" accept="image/*" name="foto">

    <button type="submit" class="btn-user-reg">Salvar alterações</button>`
    );

    events();
    return userForm;
};
const baseUrl = 'http://localhost:5000/v1/';

const headers = new Headers();
headers.append('Content-type', 'application/json');

export const UserSingUpPost = (formData) => {
    const body = JSON.stringify(Object.fromEntries(formData));
    return fetch(baseUrl + 'user', { body, headers, method: 'POST' });
};
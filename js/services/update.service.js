const baseUrl = 'http://localhost:5000/v1/';

const headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': ''
});

export const UserPatch = (formData) => {
    const body = JSON.stringify(Object.fromEntries(formData));
    return fetch(baseUrl + 'user', { body, headers, method: 'PATCH' });
};
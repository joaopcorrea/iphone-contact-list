const baseUrl = 'http://localhost:5000/v1/';

const token = sessionStorage.getItem("@token");

const header = new Headers({
    'Content-Type': 'application/json',
    // 'Authorization': sessionStorage.getItem("@token")
});

export const GetAllContacts = async () => {
    // header.append('Authorization', token);
    const response = await fetch(baseUrl + 'contact', {header, method: 'GET'});
    return await response.json();
};
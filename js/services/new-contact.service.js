const baseUrl = "http://localhost:5000/v1/";

export const NewContactPost = (body) => {   
    const token = sessionStorage.getItem("@token");

    const header = new Headers({
        'Content-type': 'application/json',
        'Authorization': token
    });
    
    return fetch(baseUrl + 'contact', {body, header, method: "POST"});
}
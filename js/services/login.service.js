const baseUrl = "http://localhost:5000/v1/";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const AuthPost = async (formData) => {
    const obj = Object.fromEntries(formData);
    const body = JSON.stringify(obj);
    const response = await fetch(baseUrl + "auth", { body, headers, method: "POST" });
    return await response.json();
}
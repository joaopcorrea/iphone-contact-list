const baseUrl = 'http://localhost:5000/v1/'
const header = new Headers()
header.append('Content-Type', 'application/json')

export const GetAllContacts = async () => {
    const token = sessionStorage.getItem("@token")
    Headers.append('Authorization', token)
    const response = await fetch(baseUrl + 'contact', {header, method: "GET"})
    return await response.json()
}
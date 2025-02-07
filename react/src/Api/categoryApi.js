import { API } from "../config"

export const viewCategory = () => {
    return fetch(`${API}/viewcategory`, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const addcategory = (category_name, token) => {
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

//delete

export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getCategory = (id) => {
    return fetch(`${API}/findcategory/${id}`, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const updateCategory = (id, category_name, token) => {
    return fetch(`${API}/update/${id}`, {
        method: "PUT",
        headers: {
            Accept: "Application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
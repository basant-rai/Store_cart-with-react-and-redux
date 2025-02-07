import { API } from "../config"

export const viewproducts = (sortBy, order, limit) => {
    return fetch(`${API}/productview?sortBy=${sortBy}&order=${order}&limit=${limit}`, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const productDetail = (id) => {
    return fetch(`${API}/productdetails/${id}`, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const addProduct = (product, token) => {
    return fetch(`${API}/productadd`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product,

    })
        .then(response => { return response.json() })
        .catch(error => console.log(error))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => { return response.json() })
        .catch(error => console.log(error))
}

export const productUpdate = (id, product, token) => {
    return fetch(`${API}/updateproduct/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => { return response.json() })
        .catch(error => console.log(error))
}

export const getProductByCategory = (categoryId) => {
    console.log(categoryId)
    return fetch(`${API}/productCategory/${categoryId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    })
        .then(response => { return response.json(); })
        .catch(error => console.log(error))
}

export const getFilteredProducts = (sortBy, order, limit, skip, filters) => {
    return fetch(`${API}/filteredproduct?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
    })
        .then(res => res.json())
        .catch(error => console.log(error))

}

// to get related products

export const getRelatedProducts = (id) => {
    return fetch(`${API}/relatedProducts/${id}`, {
        method: "GET"
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}
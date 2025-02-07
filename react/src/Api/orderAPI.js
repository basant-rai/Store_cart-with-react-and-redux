import { API } from "../config"

export const getOrders = () => {
  return fetch(`${API}/orders`, {
    method: "GET"
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

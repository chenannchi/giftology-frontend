import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/wishlists`

const index = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}?author=${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (wishlistData) => {
  try {
    // POST http://localhost:3001/api/blogs
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wishlistData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (wishlistData) => {
  try {
    const res = await fetch(`${BASE_URL}/${wishlistData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wishlistData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteWishlist = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const itemIndex = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/items`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createItem = async (itemData, id) => {
  try {
    // POST http://localhost:3001/api/blogs
    const res = await fetch(`${BASE_URL}/${id}/items`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateItem = async (itemData) => {
  try {
    const res = await fetch(`${BASE_URL}/item/${itemData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updatePurchased = async (itemId, wishlistId) => {
  try {
    const res = await fetch(`${BASE_URL}/${wishlistId}/item/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = async (wishlistId, itemId) => {
  try {
    const res = await fetch(`${BASE_URL}/${wishlistId}/item/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const showItem = async (wishlistId, itemId)=>{
  try {
    const res = await fetch(`${BASE_URL}/${wishlistId}/item/${itemId}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteWishlist,
  itemIndex,
  createItem,
  updateItem,
  updatePurchased,
  deleteItem,
  showItem
}
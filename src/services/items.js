import { del, get, post, put } from './request.js';

const URL = 'https://full-stack-crud-backend.herokuapp.com';

export async function getItems() {
  return await get(`${URL}`);
}

export async function createItem(item) {
  return await post(`${URL}/api/v1/items`, item);
}

export async function deleteItem(itemId) {
  return await del(`${URL}/api/v1/items/${itemId}`);
}

export async function updateItem(itemId, updates) {
  return await put(`${URL}/api/v1/items/${itemId}`, updates);
}

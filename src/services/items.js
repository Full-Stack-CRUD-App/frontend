import { del, get, post, put } from './request.js';

const URL = '/api/v1/items';

export async function getItems() {
  return await get(URL);
}

// export async function createList(list) {
//   return await post(URL, list);
// }

export async function createItem(item) {
  return await post(`${URL}`, item);
}

export async function deleteItem(itemId) {
  return await del(`${URL}/${itemId}`);
}

export async function updateItem(itemId, updates) {
  return await put(`${URL}/${itemId}`, updates);
}

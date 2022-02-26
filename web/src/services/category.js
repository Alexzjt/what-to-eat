import request from "umi-request";
export function getCategoriesWithDishes() {
  return request.get(`/api/categories/dishes`);
}

export function getCategories() {
  return request.get(`/api/categories`);
}

export function postCategories(data) {
  return request.post(`/api/categories`, {data});
}

export function deleteCategories(id) {
  return request.delete(`/api/categories/${id}`);
}

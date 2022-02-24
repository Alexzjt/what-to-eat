import request from "umi-request";
export function getCategoriesWithDishes() {
  return request.get(`/api/categories/dishes`);
}

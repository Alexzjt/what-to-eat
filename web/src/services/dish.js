import request from "umi-request";
export function getDishes() {
  return request.get(`/api/dishes`);
}

export function postDishes(data) {
  return request.post(`/api/dishes`, {data});
}

export function deleteDishes(id) {
  return request.delete(`/api/dishes/${id}`);
}


import request from "umi-request";
export function getRecords() {
  return request.get(`/api/records`);
}

export function postRecords(data) {
  return request.get(`/api/records`, {data});
}

export function deleteRecords(id) {
  return request.delete(`/api/records/${id}`);
}

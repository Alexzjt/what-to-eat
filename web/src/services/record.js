import request from "umi-request";
export function getRecords() {
  return request.get(`/api/records`);
}

import request from "@/utils/request";
import {API_URL} from "@/services/config";

export async function getTCC(key: string) {
  return request(`${API_URL}/tcc/key?key=${key}`);
}

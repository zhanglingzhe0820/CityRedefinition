import request from '@/utils/request';
import {API_URL} from "@/services/config";

export interface BannerParamsType {
  id?: number;
  url: string;
  hrefUrl: string;
  position: number;
  createTime?: number;
}

export async function getBanners() {
  return request(`${API_URL}/banner`);
}

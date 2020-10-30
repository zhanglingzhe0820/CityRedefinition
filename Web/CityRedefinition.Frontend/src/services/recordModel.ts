import request from '@/utils/request';
import {API_URL} from "@/services/config";

export interface RecordModelParamsType {
  id?: number;
  title: string;
  creator?: string;
  createTime?: number;
  updateTime?: number;
  extraModel: string;
  modelType: string;
}

export async function getRecordModels() {
  return request(`${API_URL}/record_model`);
}

export async function getRecordModel(id: number) {
  return request(`${API_URL}/record_model/${id}`);
}

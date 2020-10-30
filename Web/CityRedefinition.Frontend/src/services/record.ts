import request from "@/utils/request";
import {API_URL} from "@/services/config";

export function formatDegree(value) {
  ///将度转换成为度分秒
  value = Math.abs(value);
  var v1 = Math.floor(value); //度
  var v2 = Math.floor((value - v1) * 60); //分
  var v3 = Math.round(((value - v1) * 3600) % 60); //秒
  return v1 + '°' + v2 + '\'' + v3 + '"';
}

export interface RecordQueryParams {
  projectId: number;
  limit: number;
  offset: number;
}

export interface Position {
  longitude: number;
  latitude: number;
}

export interface RecordItem {
  id: number;
  recordModelTitle: string;
  recordModelId: number;
  projectTitle: string;
  projectId: number;
  creator: string;
  createTime: number;
  updateTime: number;
  imageUrls: string[];
  title: string;
  comment: string;
  recordTime: number;
  altitude: number;
  position: Position;
  district: string;
  modelExtra: string;
  userExtra: string;
}

export async function getRecords(recordQueryParams: RecordQueryParams) {
  return request(`${API_URL}/record/project?projectId=${recordQueryParams.projectId}&limit=${recordQueryParams.limit}&offset=${recordQueryParams.offset}`);
}

export async function getRecord(recordId: number) {
  return request(`${API_URL}/record/${recordId}`);
}

export async function updateRecord(recordId: number) {
  return request(`${API_URL}/record/${recordId}`);
}

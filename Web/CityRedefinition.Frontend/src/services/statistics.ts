import request from '@/utils/request';
import {API_URL} from "@/services/config";
import {Position} from "@/services/record";

export interface StatisticsAbstractData {
  peopleNum: number;
  recordNum: number;
  picNum: number;
  speciesNum: number;
}

export interface AroundPicQueryParameters {
  startPosition: Position;
  endPosition: Position;
}

export interface ActiveAccessItem {
  x: string;
  y: number;
}

export interface ActiveAccessResponse {
  totalAccessTime: number;
  activeAccessItemList: ActiveAccessItem[];
}

export async function getAllStatistic() {
  return request(`${API_URL}/statistics/abstract`);
}

export async function getPeopleStatistic() {
  return request(`${API_URL}/statistics/people`);
}

export async function getPeopleRankStatistic(startTime: number, endTime: number) {
  return request(`${API_URL}/statistics/people/rank?startTime=${startTime}&endTime=${endTime}`);
}

export async function getAroundPickStatistic(params: AroundPicQueryParameters) {
  return request(`${API_URL}/statistics/pic/around`, {
    method: 'POST',
    data: {
      ...params
    }
  });
}

export async function getAccessStatistic() {
  return request(`${API_URL}/statistics/access`);
}

export async function getMapAbstractStatistic() {
  return request(`${API_URL}/statistics/map/abstract`);
}



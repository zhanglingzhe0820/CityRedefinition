import request from '@/utils/request';
import {API_URL} from "@/services/config";
import {Position} from "@/services/record";

export interface ProjectUserItem {
  id: number;
  phone: string;
  avatarUrl: string;
  nickname: string;
  gender: number;
  realName: string;
  company: string;
  recordNum: number;
}

export interface ProjectParamsType {
  id?: number;
  coverUrl: string;
  privacyType: number;
  title: string;
  company: string;
  startPosition: Position;
  endPosition: Position;
  creator: string;
  recordModelId: number;
  recordModelTitle: string;
  description: string;
  createTime: number;
  updateTime: number;
  extraModel: string;
  members: ProjectUserItem[];
}

export enum OperationType {
  ADD,
  DELETE
}

export interface ProjectRelationUpdateParamsType {
  projectId: number;
  relationType: number;
  operationType: OperationType;
}

export interface ProjectRelationParamsType {
  id: number
  username: string;
  projectId: number;
  relationType: number;
  createTime: number;
  updateTime: number;
}

export async function getProjects(key: string, recordModelId: number[], limit: number, offset: number) {
  return request(`${API_URL}/project/query`, {
    method: 'POST',
    data: {
      key, recordModelId, limit, offset
    }
  });
}

export async function getProjectPeople(id: number) {
  return request(`${API_URL}/project/people/${id}`);
}

export async function getMineProjects() {
  return request(`${API_URL}/project/minne`);
}

export async function updateProject(params: ProjectParamsType) {
  return request(`${API_URL}/project`, {
    method: 'POST',
    data: {
      params
    }
  });
}

export async function getProject(id: number) {
  return request(`${API_URL}/project/${id}`);
}

export async function deleteProject(projectId: number) {
  return request(`${API_URL}/project?projectId=${projectId}`, {
    method: 'DELETE'
  });
}

export async function getProjectRelation(projectId: number) {
  return request(`${API_URL}/project?projectId=${projectId}`);
}

export async function updateProjectRelation(params: ProjectRelationUpdateParamsType) {
  return request(`${API_URL}/project/people/mine`, {
    method: 'POST',
    data: {
      params
    }
  });
}



import request from '@/utils/request';
import {API_URL} from "@/services/config";

export interface RegisterParamsType {
  phone: string;
  password: string;
  captcha: string;
}

export interface UserAccountParamsType {
  username?: string;
  largeCoins: number;
}

export async function sendCaptcha(phone: string) {
  return request(`${API_URL}/account/captcha?phone=${phone}`);
}

export async function login(phone: string, captcha: string) {
  return request(`${API_URL}/account?phone=${phone}&captcha=${captcha}`);
}

export async function loginWithPassword(phone: string, password: string) {
  return request(`${API_URL}/account/password?phone=${phone}&password=${password}`);
}

export async function register(params: RegisterParamsType) {
  return request(`${API_URL}/account/register`, {
    method: 'POST',
    data: params
  });
}

export async function getUserInfo() {
  return request(`${API_URL}/account/info`);
}

export interface UserInfoParams {
  avatarUrl: string;
  nickname: string;
}

export async function saveUserInfo(params: UserInfoParams) {
  return request(`${API_URL}/account/info`, {
    method: 'POST',
    data: params
  });
}

export async function getUserAccount() {
  return request(`${API_URL}/user_account`);
}

export async function updateUserAccount(params: UserAccountParamsType) {
  return request(`${API_URL}/user_account`, {
    method: 'POST',
    data: params
  });
}

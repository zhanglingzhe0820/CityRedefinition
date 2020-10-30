import request from '@/utils/request';
import {COMMON_URL} from "@/services/config";

export async function upload(file: { originFileObj: string | Blob; }) {
  const formData = new FormData();
  formData.append("file", file.originFileObj)
  return request(`${COMMON_URL}/upload`, {
    method: 'POST',
    data: formData
  });
}

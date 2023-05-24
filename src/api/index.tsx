import instance from 'axios';
import { getItem } from 'src/storage/storage';
// 예시로 https://koreanjson.com/ 의 데이터 사용
export const BASE_URL: string = 'https://koreanjson.com';

const axios = instance.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(async (config) => {
  const token = await getItem('token');
  console.log(
    token,
    config.method,
    config.url,
    config.params || '',
    config.data || ''
  );
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (err: any) => {
    throw err.response.data;
  }
);
export default axios;

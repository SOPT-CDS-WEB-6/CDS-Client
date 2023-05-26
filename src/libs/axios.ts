import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_APP_BASE_URL,
    'Content-type': 'application/json',
  },
});

export default client;

export const cgvGetFetcher = (url: string) => client.get(url).then((res) => res.data);

import { createClient } from '@vercel/kv';

const kv = createClient({
    url: process.env.KV_APPS_REST_API_URL,
    token: process.env.KV_APPS_REST_API_TOKEN
  });
 
export default async function handler(request, response) {
  const user = await kv.hgetall('user:me');
  return response.status(200).json(user);
}
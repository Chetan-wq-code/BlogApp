import { loadEnv } from 'vite';

const env = loadEnv('development', process.cwd());
console.log('URL:', env.VITE_APPWRITE_URL);
console.log('Project ID:', env.VITE_APPWRITE_PROJECT_ID);
console.log('Bucket ID:', env.VITE_APPWRITE_BUCKET_ID);

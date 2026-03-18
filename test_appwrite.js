import { Client, Storage } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('6989fe9e002291d28e8b');

const storage = new Storage(client);

const url = storage.getFilePreview('698a027400314bbb9fa7', 'dummy-file-id');
console.log('Returned type:', typeof url);
console.log('Is instance of URL:', url instanceof URL);
console.log('Value:', url);

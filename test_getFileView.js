import { Client, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('6989fe9e002291d28e8b');

const storage = new Storage(client);

const url = storage.getFileView('698a027400314bbb9fa7', 'dummy-file-id');
console.log("getFileView return type:", typeof url);
console.log("getFileView value:", url.href || url);

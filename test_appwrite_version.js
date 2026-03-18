import appwrite from 'appwrite';
console.log("Appwrite version:", appwrite.Client.prototype.setEndpoint.toString().substring(0, 100));

import { Client, Storage } from 'appwrite';
const client = new Client().setEndpoint('https://nyc.cloud.appwrite.io/v1').setProject('6989fe9e002291d28e8b');
const storage = new Storage(client);
const url = storage.getFilePreview('test', 'test');
console.log("constructor name:", url.constructor.name);
console.log("URL string output:", url);

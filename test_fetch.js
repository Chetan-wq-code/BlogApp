import { Client, Databases, Query } from 'appwrite';

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('6989fe9e002291d28e8b');

const databases = new Databases(client);

async function testFetch() {
    try {
        const response = await databases.listDocuments(
            '69a853f3002ab7712f37', // Database ID
            'article', // Collection ID
            [Query.equal("status", "active")]
        );
        console.log("Found", response.documents.length, "documents");
        if (response.documents.length > 0) {
            console.log("First document:", response.documents[0]);
        }
    } catch (e) {
        console.error("Error fetching docs", e);
    }
}
testFetch();

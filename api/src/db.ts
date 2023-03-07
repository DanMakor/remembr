import { Db, MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.DB_CONNECTION_STRING as string;
const databaseName = 'remembr';
export var db: Db;

export function initDb() {
    return MongoClient.connect(mongoUri).then(client => {
        db = client.db(databaseName);
    });
}

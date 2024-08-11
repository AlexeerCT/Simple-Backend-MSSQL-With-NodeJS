import {config as dotenv} from 'dotenv';
dotenv();

export const dbSettings = {
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'test',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },  
}
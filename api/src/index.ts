import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { runEmailCron } from './cron';
import { initDb } from './db';

dotenv.config();

initDb().then(() => {
    const app: Express = express();
    const port = process.env.PORT;

    runEmailCron();

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}).catch(console.error)

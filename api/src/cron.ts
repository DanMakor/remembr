import { backOff } from 'exponential-backoff';
import cron from 'node-cron';
import { sendEmail } from './mail';

export function runEmailCron() {
    console.log("...Initializing CRON job...")
    cron.schedule("* * * * *", function() {
        // 0 0 * * 0
        backOff(() => sendEmail("CRON it up")).then(response => {
            console.log(response);
        }).catch(err => {
            console.error(err);
        });
    });
}
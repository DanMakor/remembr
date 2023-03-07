import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function sendEmail(message: string): Promise<SMTPTransport.SentMessageInfo> {
    return transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${message}</b>`, // html body
    });
}
import { MailAdapter, SendMailData } from "../mail-adaptes";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "493b8313613026",
    pass: "2e6aaf67b2bb93",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Vinicius Rosa <bakavini99@gmail.com>",
      subject,
      html: body,
    });
  }
}

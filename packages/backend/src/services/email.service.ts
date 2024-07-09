import nodemailer from "nodemailer";

export default class EmailService {
  constructor() {}

  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'serg1prime@gmail.com',
      pass: 'frarihgctsslbsro',
    },
  });

  send = async({ email, subject, html }: {email: string, subject: string, html: string}) => {
    return this.transporter.sendMail({
      to: email,
      subject,
      html,
    })
  };

  sendEmail = async(email: string, type: string, token: string, subject: string) => {
    const href = `http://127.0.0.1:5173/#/${type}/${token}`;
    const html = `
      <h1>Activation</h1>
      <a href="${href}">${href}</a>
    `;
    
    return this.send({
      email,
      subject,
      html,
    });
  };
};

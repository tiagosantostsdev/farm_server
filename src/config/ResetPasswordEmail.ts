import nodemailer from "nodemailer";

export const sentEmailVerification = (email: string, codigo: string) => {
  const contentHtml = `
  <html>
  <body style="width:100%;">
      <h2>Digite o código de verificação para redefinir a senha de usuário.</h2>
      <p style="font-size: 1.5rem; text-align: center; border-radius: .5rem; letter-spacing: .6rem; font-weight: bold; padding: .2rem; background-color: rgb(128, 141, 126); width:50%">${codigo}</p>
  </body>
  </html>`;

  const userEmail: string = String(process.env.EMAIL);
  const userPass: string = String(process.env.PASS);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
      user: userEmail,
      pass: userPass,
    },
  });

  transporter.sendMail(
    {
      from: userEmail,
      to: email,
      subject: "Redefinição de palavra passe",
      html: contentHtml,
    },
    (error, info) => {
      if (error) {
        return console.log({ message: error?.message });
      }
      console.log({ message: "Email enviado", info });
    }
  );
};

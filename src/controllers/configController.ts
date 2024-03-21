import nodemailer from "nodemailer";

export const sentEmailVerification = (email: string, codigo: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
      user: "devsangola5@gmail.com",
      pass: "hryy upwd vpew ixcw",
    },
  });

  transporter.sendMail(
    {
      from: "devsangola5@gmail.com",
      to: email,
      subject: "Redefinição de palavra passe",
      text: `Este é o código de redefinição da palavra passe: ${codigo}`,
    },
    (error, info) => {
      if (error) {
        return console.log({ message: error?.message });
      }
      console.log({ message: "Email enviado", info });
    }
  );
};



export default function handler(req, res) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')

  const { body } = req;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'contatosselo@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })

  const mailData = {
    from: 'contatosselo@gmail.com',
    to: 'atendimento@magnaniembalagens.com',
    subject: `Novo contato: ${body.firstName}`,
    text: `
        Nome: ${body.firstName}
        Sobrenome: ${body.lastName}
        Email: ${body.email}
    `,
    html: `
            <div>
              Nome: ${body.firstName} <br><br>
              Sobrenome: ${body.lastName} <br><br>
              Email: ${body.email} <br><br>
            </div>
          `
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        reject();
      } else {
        res.status(200).end();
        resolve();
      }
    })
  })
}
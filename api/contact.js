// Imports the Sendgrid API and sets API key
const sendgridMail = require('@sendgrid/mail')
sendgridMail.setApiKey(process.env.sendgrid_key)

module.exports = async (req, res) => {
  try {
    let { name, email, phone, message } = req.body

    let emailMessage = {
      to: 'Contato <oi@subatomic.rocks>',
      replyto: `${name} <${email}>`,
      from: 'Website Subatomic <no-reply@subatomic.rocks>',
      subject: `Contato Web: "${name}"`,
      text: `Você recebeu um contato via website!
      De: ${name}
      E-mail: ${email}
      Telefone: ${phone}
      Mensagem:
      ${message}`
    }

    let response = await sendgridMail.send(emailMessage)

    res.send({ sent: true })
  } catch (e) {
    res.status(500).send({
      sent: false,
      error: e
    })
  }
}
// Imports the Sendgrid API and sets API key
const sendgridMail = require('@sendgrid/mail')
sendgridMail.setApiKey(process.env.sendgrid_key)

module.exports = (req, res) => {
  let { name, email, phone, message } = req.body

  let emailMessage = {
    to: 'oi@subatomic.rocks',
    from: 'oi@subatomic.rocks',
    subject: `Contact: ${name}`,
    text: `From: ${name}, ${email}
    Phone: ${phone}
    Message:
    ${message}`
  }

  let response = sendgridMail.send(email)

  console.log('Contact', response, req.body, email)
  res.send('Sent.')
}
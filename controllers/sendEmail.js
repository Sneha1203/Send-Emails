require('dotenv')
const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmail = async(request, response) => {
    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'clotilde.olson95@ethereal.email',
            pass: '6Y24M2v5R5EXHbsDbU'
        }
    });

    let info = await transporter.sendMail({
        from:'"Sneha Chandak" <snehac1203@gmail.com>',
        to: 'chandaksneha1203@gmail.com',
        subject: "hello!!!!",
        html: '<h2>sending emails with node.js</h2>'
    })

    response.json(info)
}

// const sendEmailSendGrid = async(request, response) => {
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//     const msg = {
//         to: 'snehac1203@gmail.com', // Change to your recipient
//         from: 'mystudynook12@gmail.com', // Change to your verified sender
//         subject: 'Sending with SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//       }

//     const info = await sgMail.send(msg)
//     response.json(info)
// }

module.exports = sendEmail
const nodemailer = require('nodemailer')
const nodeMailerConfig = require('../utils/nodemailerConfig')

const sendEmail = async ({ to, subject, html }) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodeMailerConfig);

    return transporter.sendMail({
        from: '"Coding Addict" <abhi905040@gmail.com>', // sender address
        to,
        subject,
        html,
    });

};

module.exports = sendEmail;
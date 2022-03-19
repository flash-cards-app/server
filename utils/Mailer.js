let nodemailer = require('nodemailer');

class Mailer {
    constructor(host, port, user, pass) {
        this.host = host
        this.port = port
        this.user = user
        this.pass = pass

        this.transporter = nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: false,
            service: 'gmail',
            auth: {
                user: this.user,
                pass: this.pass
            }
        });
    }

    async sendEmail(from, to, subject, text = "", html = "") {
        let info

        if (text == "") {
            info = await this.transporter.sendMail({
                from,
                to,
                subject,
                html
            })
        } else {
            info = await this.transporter.sendMail({
                from,
                to,
                subject,
                text
            })
        }

        return info
    }
}

module.exports = {Mailer}
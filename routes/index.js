const express       = require('express'),
      router        = express.Router(),
      nodemailer    = require('nodemailer');

// index route
router.get('/', (req, res) => {
    res.render('index');
});

// nodemailer setup
router.post('/', (req, res) => {
    let email   = req.sanitize(req.body.email),
        name    = req.sanitize(req.body.name),
        subject = req.sanitize(req.body.subject),
        message = req.sanitize(req.body.message);

    let mailTransporter = nodemailer.createTransport({
        host: "secure193.inmotionhosting.com", 
        secureConnection: true, 
        port: 465, 
            auth: {
                user: process.env.SMTPMail,
                pass: process.env.SMTPKey
            }
    });

    let mailOptions = {
        from: 'contact@caleb-cox.com',
        to: 'caleb@caleb-cox.com', 
        subject: subject + " - from: " + name + " - " + email,
        text: message
    }

    mailTransporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log("Email could not be sent due to error: " + err);
        } else {
            console.log("Email has been sent successfully");
        }
    });
    res.redirect('/#contact');
});

module.exports = router;
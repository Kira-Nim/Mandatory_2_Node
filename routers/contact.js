import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Generate test service account from ethereal.email
// Needed because I don't use a real mail account for mandatory assignment
let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
    // "smtp.ethereal.email" --> Should be the email server fx googlemail.com for gmail
    // "testAccount" in "user: testAccount.user" 
    //                       --> Should be token to get account username credentials from server
    //                       --> The same for password.
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
    },
});

router.post("/api/contact", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message =  req.body.message;

    const nodeFolioMessage = `Message from: ${name}\nphone no. ${phone}\n\nMessage:\n\n${message}`;

    // send mail with defined transport object
    let info = await transporter.sendMail({
                    from: `"${name}" <${email}>`, // sender address
                    to: "nodefolio@example.com", // list of receivers
                    subject: "Message from Nodefolio", // Subject line
                    text: nodeFolioMessage, // plain text body
                    html: `<b>${nodeFolioMessage}</b>`, // html body
    });


    // Get an url for ethereal's service that allows you to se what has been sent.
    // This is only available because using testmail
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send();
});

export default router; 
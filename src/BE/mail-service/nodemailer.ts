import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "denonymous-contact@denexus.xyz",
    pass: process.env.webmail_pass,
  },
});
// https://denonymous.denexus.xyz
export async function signUpConfirmation(recipientEmail:string,key:string) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'SOCIFIT <denonymous-contact@denexus.xyz>', // sender address
    to: recipientEmail, // list of receivers
    subject: "Email verification ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: `<div>
    <div style="text-align: center;">
        <div style="background-color: black; text-align: center;padding:2em 0;">
        <p style="text-align:center;font-size:2rem;color:white;">SOCIFIT.ai</p>
        </div>
        <h1>You Are Almost There!</h1>
        <p>Verify your email, to complete this process pase the code provided below</p>
        <p>code: ${key}</p>

    </div>
    <footer style="display: block; background-color: black; margin: 2em auto;">
    <p style="text-align:center;font-size:2rem;color:white;">SOCIFIT.ai</p>
    </footer>
</div>`, // html body
  });

  console.log("Message sent: %s", info);
}


export async function passwordReset(recipientEmail:string,key:string) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'SOCIFIT <denonymous-contact@denexus.xyz>', // sender address
    to: recipientEmail, // list of receivers
    subject: "Password Reset ✔", // Subject line
    html: `<div>
    <div style="text-align: center;">
    <div style="background-color: black; text-align: center;padding:2em 0;">
    <p style="text-align:center;font-size:2rem;color:white;">SOCIFIT.ai</p>
    </div>
        <h1>Reset your password</h1>
        <p>A password reset was initiated to your email, paste the code below to continue and create a new password</p>
        <p>code: ${key}</p>
    </div>
    <footer style="display: block; background-color: black; margin: 2em auto; padding:4em 0;">
    <p style="text-align:center;font-size:2rem;color:white;">SOCIFIT.ai</p>
    </footer>
</div>`, // html body
  });

  console.log("Message sent: %s", info);
}


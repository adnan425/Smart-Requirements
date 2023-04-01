const nodemailer = require('nodemailer');

function sendEmail(title = '', name = '', email = '', password = '') {
  console.log(email);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "m.adnan6425@gmail.com",
      pass: "zqkixvfrccggcsbm",
    },
  });
  // HTML template with styles
  const template = `
      <div style="background-color: #f2f2f2; padding: 20px;">
        <h2 style="color: #333;">Hello ${name}!</h2>
        <p style="color: #666;">Your login details for ${title} project.</p>
        <p style="color: #666;"><b>Email:</b> ${email} </p>
        <p style="color: #666;"><b>Password:</b> ${password} </p>
        <p><b>Regards</b></p>
        <a href="#" style="color: #1da1f2;">Smart Requirements</a>
      </div>
    `;
  var mailOptions = {
    from: "smartrequirements@gmail.com",
    to: email,
    subject: "Added You As A Stakeholder",
    html: template
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
module.exports = sendEmail;


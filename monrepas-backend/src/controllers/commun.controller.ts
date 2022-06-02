


  const sendEmail=async(email:string,confirmation:string,ticket:any)=>{



    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testcoding975@gmail.com',
        pass: 'testCoding1998'
      }
    });    
    var mailOptions = {
      from: 'testcoding975@gmail.com',
      to: email,
      subject: confirmation,
      html:ticket
    };
    
    transporter.sendMail(mailOptions, function(error:Error, info:any){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
  }
  export {sendEmail}
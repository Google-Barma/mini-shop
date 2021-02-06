const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

//transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
  const options = {
    from: `Mini-Shop ${email}`,
    to: data.email,
    subject: 'Ваши заказ из Mini-Shop',
    html: `
    <div>
      <h2>Hello, ${data.name}</h2>
      <h3>Your order:</h3>
      <ul>
        ${data.order.map(
          ({ color, amount, price }) =>
            `<li>${color} - ${amount}pcs., price: $${price * amount}</li>`,
        )}
      </ul>
      <p>Total: ${data.order.reduce(
        (sum, item) => sum + item.price * item.amount,
        0,
      )}</p>
        <small>Wait for the courier.</small>
    </div>
      `,
  };

  transporter.sendMail(options);
};

exports.sendUserEmail = functions.database
  .ref('orders/{pushID}')
  .onCreate(order => sendOrderEmail(order.val()));

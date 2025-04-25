import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, plan, addons, notes, total } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'matthewcierpiol@gmail.com',
      pass: 'fxizeprblzxoftxk',
    },
  });

  const mailOptions = {
    from: 'GrowPilot Orders <matthewcierpiol@gmail.com>',
    to: 'matthewcierpiol@gmail.com',
    subject: 'New Grow Room Order',
    text: `
New order received:

Name: ${name}
Email: ${email}
Selected Plan: ${plan}
Add-ons: ${addons.join(', ') || 'None'}
Additional Notes: ${notes || 'None'}
Total Price: £${total}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Order email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}

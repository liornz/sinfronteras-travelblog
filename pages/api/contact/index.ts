import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, insertDucument } from '../../../lib/mongodb-utils';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const { email, name, message } = req.body;
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const emailIsValid = pattern.test(email);
    if (
      !emailIsValid ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }

    const msg = {
      to: 'travelblogsinfronteras@gmail.com',
      from: 'info@sinfronteras-travelblog.com',
      subject: 'Sin-Fronteras - Contact Form',
      html: `<h2>New Message from ${name} - ${email}</h2><hr><p>${message}</p>`,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: error.message || 'Connection to the database failed!',
        });
      }
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let result;
    try {
      await sgMail.send(msg);
      result = await insertDucument(client, 'messages', newMessage);
      const returnMessage = {
        _id: result.insertedId,
        ...newMessage,
      };
      res
        .status(201)
        .json({ message: 'Message saved correctly!', comment: returnMessage });
    } catch (error) {
      res.status(500).json({ message: 'Saving message failed!' });
    }
    client.close();
  }
};

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import {
  connectDatabase,
  insertDucument,
} from '../../../lib/mongodb-utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || 'Connection to the database failed!' });
    return;
  }

  if (req.method == 'POST') {
    const { email, name, message } = req.body;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const emailIsValid = pattern.test(email);
    if (
      !emailIsValid ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input!' });
      client.close();
      return;
    }
    // save the comment in the DB, per destination name/slug
    const newMessage = {
      email,
      name,
      message,
    };
    let result;
    try {
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

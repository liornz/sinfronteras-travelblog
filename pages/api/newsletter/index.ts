import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, insertDucument } from '../../../lib/mongodb-utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(501).json({ message: 'Please send a POST request' });
  }
  const enteredEmail = req.body.email;
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const emailIsValid = pattern.test(enteredEmail);
  if (!emailIsValid) {
    res.status(422).json({ message: 'Invalid Email Address' });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }
  try {
    await insertDucument(client, 'newsletter', { email: enteredEmail });
    client.close();
    res
      .status(201)
      .json({ message: 'Signed up for newsletter!', email: enteredEmail });
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' });
    client.close();
    return;
  }
};

export default handler;

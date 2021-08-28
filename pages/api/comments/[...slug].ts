import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, getAllDocuments, insertDucument } from '../../../lib/mongodb-utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const countrySlug = req.query.slug[0];
  const destinationSlug = req.query.slug[1];
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    if (error instanceof Error) {
          res
      .status(500)
      .json({ message: error.message || 'Connection to the database failed!' });
    }
    return;
  }

  if (req.method == 'POST') {
    const { email, name, text } = req.body;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const emailIsValid = pattern.test(email);
    if (
      !emailIsValid ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input!' });
      client?.close();
      return;
    }
    // save the comment in the DB, per destination name/slug 
    const newComment = {
      countrySlug,
      destinationSlug,
      email,
      name,
      text,
    };
    let result;
    try {
      result = await insertDucument(client, 'comments', newComment);
      const returnComment = {
        _id: result.insertedId,
        ...newComment,
      };
      res
        .status(201)
        .json({ message: 'Comment added to DB', comment: returnComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
    client?.close();
  }
  if (req.method == 'GET') {
     let documents;
     try {
       documents = await getAllDocuments(
         client,
         'comments',
         {
          countrySlug: countrySlug, 
          destinationSlug: destinationSlug,
         },
         { _id: -1 }
       );
       res.status(200).json({
         message: 'Success!',
         destination: destinationSlug,
         comments: documents,
       });
     } catch (error) {
       res.status(500).json({ message: 'extracting comments failed!' });
     }
     client.close();
  }
};

export default handler;

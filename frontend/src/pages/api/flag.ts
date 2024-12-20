import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: 'Country code is required' });
  }

  try {
    const response = await fetch(`${baseUrl}/countries/${code}/flag`);
    if (response.ok) {
      const flagUrl = await response.text(); // Usamos .text() porque la respuesta es solo texto (la URL)

      res.status(200).json(flagUrl); // Respondemos directamente con la URL
    } else {
      res.status(500).json({ message: 'Error fetching flag data' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default handler;

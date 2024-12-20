// /pages/api/population.ts
import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: 'Country code is required' });
  }

  try {
    const response = await fetch(`${baseUrl}/countries/${code}/population`);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: 'Error fetching population data' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default handler;

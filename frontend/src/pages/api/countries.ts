import { Country } from '@/interfaces/country';
const baseUrl = `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;
export default async function handler(req, res) {
  try {
    const response = await fetch(`${baseUrl}/countries`);
    const data = await response.json();
    const countries = data.map((country: Country) => ({
      name: country.name,
      countryCode: country.countryCode,
    }));
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error al obtener países:', error);
    res.status(500).json({ error: 'Error al obtener la lista de países' });
  }
}

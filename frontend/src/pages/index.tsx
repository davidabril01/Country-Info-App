import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Country } from '@/interfaces/country';

interface CountriesProps {
  countries: Country[];
}

const CountryListPage: React.FC<CountriesProps> = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filtrar los países según el término de búsqueda
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Explore Countries
      </h1>

      {/* Buscador */}
      <div className="max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Lista de países */}
      <ul className="mt-4">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <li key={country.countryCode} className="mb-4">
              <Link
                href={`/country/${country.countryCode}`}
                className="block p-4 rounded-lg bg-white shadow-lg hover:bg-blue-100 transition-colors"
              >
                <div className="text-xl font-semibold text-blue-600">
                  {country.name}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="text-center">No countries found.</li>
        )}
      </ul>
    </div>
  );
};

// getServerSideProps para obtener los datos de países
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Llamamos a la API de Next.js
    const response = await fetch('http://localhost:3000/api/countries');
    const countries: Country[] = await response.json();

    return { props: { countries } };
  } catch (error) {
    console.error('Error fetching countries:', error);
    return { props: { countries: [] } }; // Devuelve un array vacío si hay error
  }
};

export default CountryListPage;

import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Image from 'next/image';

interface CountryPageProps {
  countryCode: string;
}

interface PopulationData {
  year: number;
  value: number;
}

const CountryPage: React.FC<CountryPageProps> = ({ countryCode }) => {
  const [population, setPopulation] = useState<PopulationData[]>([]);
  const [flagUrl, setFlagUrl] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const populationResponse = await fetch(
        `/api/population?code=${countryCode}`,
      );
      const flagResponse = await fetch(`/api/flag?code=${countryCode}`);

      if (populationResponse.ok) {
        const populationData = await populationResponse.json();
        setPopulation(populationData);
      }

      if (flagResponse.ok) {
        const flagData = await flagResponse.json();
        setFlagUrl(flagData);
      }
    };

    fetchData();
  }, [countryCode]);

  // Transform population data for recharts
  const chartData = population.map((data: PopulationData) => ({
    year: data.year,
    population: data.value,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Country: {countryCode}
      </h1>

      {flagUrl && (
        <div className="flex justify-center mb-6">
          <Image
            src={flagUrl}
            alt={`${countryCode} Flag`}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-center mb-6">
        Population Chart
      </h2>

      {population.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: '#333', borderColor: '#fff' }}
            />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line
              type="monotone"
              dataKey="population"
              stroke="#FFD700"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center mt-4">Loading population data...</p>
      )}

      <button
        onClick={() => router.back()}
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-4 text-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        Back
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { code } = params!;

  return {
    props: {
      countryCode: code,
    },
  };
};

export default CountryPage;

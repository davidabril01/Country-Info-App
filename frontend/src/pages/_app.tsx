import type { AppProps } from 'next/app';
import '../styles/globals.css'; // O la ruta correcta a tu archivo de CSS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

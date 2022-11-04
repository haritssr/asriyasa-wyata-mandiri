import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <div className='min-h-screen bg-orange-200 mx-auto max-w-5xl'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

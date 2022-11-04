import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='CV Asriyasa Wyata Mandiri adalah perusahaan' />
          <meta name='author' content='CV Asriyasa Wyata Mandiri' />
          <meta name='keywords' content='Mixa Beton, Mixa Paving, Beton, Paving' />

          <meta property='og:title' content='CV Asriyasa Wyata Mandiri' />
          <meta property='og:site_name' content='CV Asriyasa Wyata Mandiri' />
          <meta property='og:description' content='CV Asriyasa Wyata Mandiri adalah perusahaan' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://mixaperkasa.com/' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content='CV Asriyasa Wyata Mandiri' />
          <meta name='twitter:description' content='CV Asriyasa Wyata Mandiri adalah perusahaan' />

          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        </Head>
        <body className='font-inter'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

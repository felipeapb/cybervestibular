import Head from 'next/head';

function IndexPage({ siteNome, descricao }) {
  return (

    <Head>
      <title>{siteNome}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={descricao} />


      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

    </Head>

  );
}

export default IndexPage;

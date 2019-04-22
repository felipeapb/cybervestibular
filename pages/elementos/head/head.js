import Head from 'next/head';

function IndexPage({siteNome,descricao}) {
  return (
    <div>
      <Head>
        <title>{siteNome}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={descricao} />

        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      
      </Head>

    </div>
  );
}

export default IndexPage;
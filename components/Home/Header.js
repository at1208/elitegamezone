import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>Elitegamezone</title>
      <meta
        name="description"
        content="Elitegamezone Is A Website For Gaming Nerds, The Website Would Provide All The Latest And The Greatest News In The Gaming World. Elitegamezone Would Be A One Stop Destination For Ant Gaming Related Queries."
      />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`} />
      <meta
        property="og:title"
        content={`Elitegamezone Is A Website For Gaming Nerds, The Website Would Provide All The Latest And The Greatest News In The Gaming World. Elitegamezone Would Be A One Stop Destination For Ant Gaming Related Queries. | ${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Elitegamezone Is A Website For Gaming Nerds, The Website Would Provide All The Latest And The Greatest News In The Gaming World. Elitegamezone Would Be A One Stop Destination For Ant Gaming Related Queries."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
      />
      <meta
        property="og:site_name"
        content={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/elitegamezone.svg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/elitegamezone.svg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        property="fb:app_id"
        content={`${process.env.NEXT_PUBLIC_FB_APP_ID}`}
      />
    </Head>
  );
}

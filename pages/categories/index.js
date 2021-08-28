import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import BlogMediumCard from "../../components/Blog/Cards/mediumCard";
import { category_list_by_domain } from "../../actions/category";
import Link from "next/link";

const Category = ({ data, router }) => {
  if (data) {
    function BlogsByCategory() {
      return data.map((blog, i) => {
        return <BlogMediumCard blog={blog} key={i} />;
      });
    }

    function HeaderSEO() {
      return (
        <Head>
          <title>Categories | {process.env.NEXT_PUBLIC_APP_NAME}</title>
          <meta
            name="description"
            content="Elitegamezone Is A Website For Gaming Nerds, The Website Would Provide All The Latest And The Greatest News In The Gaming World. Elitegamezone Would Be A One Stop Destination For Ant Gaming Related Queries."
          />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
          />
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

    return (
      <>
        <Layout>
          <HeaderSEO />
          <div className="row col container">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row col">
                {data.map((category, i) => {
                  return (
                    <div className="col-md-3 category-name" key={i}>
                      <Link href={`/category/${category.slug}`}>
                        <a>
                          <span style={{ color: "teal" }}>{category.name}</span>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <></>;
  }
};

Category.getInitialProps = () => {
  return category_list_by_domain().then(async (response) => {
    return { data: response };
  });
};

export default withRouter(Category);

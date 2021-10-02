import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import { Grid, Box } from "@material-ui/core";
import Router from "next/router";
import BlogDetail from "../components/Blog";
import BlogHead from "../components/Blog/BlogHeader";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";
import { read_blog } from "../actions/blog";

const RelatedBlogs = dynamic(() => import("../components/Blog/RelatedBlog"), {
  ssr: false,
});

const AuthorInfo = dynamic(() => import("../components/Blog/Author"), {
  ssr: false,
});

const Blog = ({ query, blog }) => {
  if (blog) {
    return (
      <>
        <BlogHead blog={blog} />
        <Layout>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={7}
              xl={6}
              className={styles.container}
            >
              <BlogDetail blog={blog} />
            </Grid>
          </Grid>
          <Box className={styles.morecontainer}>
            <h5 className={styles.moretitle}>More from Broocode</h5>
            <Grid container justify="center">
              <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
                <Grid container>
                  <RelatedBlogs blog={blog} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </>
    );
  } else {
    return <></>;
  }
};

Blog.getInitialProps = ({ query }) => {
  return read_blog(query.blog).then((response) => {
    return { blog: response, query };
  });
};

export default withRouter(Blog);

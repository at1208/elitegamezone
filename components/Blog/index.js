import { Grid } from "@material-ui/core";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../../styles/Blog.module.css";
import dynamic from "next/dynamic";
import renderHTML from "react-render-html";
import moment from "moment";
const readingTime = require("reading-time");

const Avatar = dynamic(() => import("@material-ui/core/Avatar"), {
  ssr: false,
});

const Blog = ({ blog }) => {
  if (blog) {
    const showAuthor = () => {
      return (
        <section className={styles.usercontainer}>
          <Grid container justify="space-between">
            <Grid xs={12}>
              <Grid container justify="left">
                <Avatar
                  variant="circular"
                  src={blog.postedBy.headshot_url}
                  alt=""
                  className={styles.authorimg}
                />
                <div className={styles.authorContainer}>
                  <font className={styles.authorname}>
                    {blog.postedBy.full_name}
                  </font>
                  <font className={styles.postedtime}>
                    {moment(blog && blog.createdAt).format("MMM D")} .{" "}
                    {readingTime((blog && blog.body) || " ").text}
                  </font>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </section>
      );
    };

    const showCategories = () => {
      let categories = blog.categories.map((category, i) => {
        return (
          <Link href={`/category/${category.slug}`} key={i}>
            <a>
              <span className={styles.tagcatbtn}>{category.name}</span>
            </a>
          </Link>
        );
      });
      return <div className={styles.extras}>{categories}</div>;
    };

    return (
      <>
        <h1 className={styles.title}>{blog.title}</h1>
        {showAuthor()}
        <div>
          <LazyLoadImage
            src={blog.featureImg}
            className={styles.featureImg}
            alt="feature image"
          />
        </div>
        <div className={styles.body}>{renderHTML(blog.body || " ")}</div>
        <Grid container justify="center">
          {showCategories()}
        </Grid>
      </>
    );
  } else {
    return <></>;
  }
};

export default Blog;

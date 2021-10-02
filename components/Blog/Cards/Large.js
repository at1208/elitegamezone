import styles from "../../../styles/BlogLargeCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, Box } from "@material-ui/core";

const readingTime = require("reading-time");
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ blog }) => {
  if (blog) {
    return (
      <Link href={`/${blog && blog.slug}`}>
        <Box className={styles.outercontainer}>
          <Box>
            <a>
              <LazyLoadImage
                effect="blur"
                src={blog && blog.featureImg}
                alt=""
                className={styles.featureImg}
              />
            </a>
          </Box>
          <Box className={styles.innerContainer}>
            <Grid container>
              <div className={styles.category}></div>
              <Grid item>
                <font className={styles.name}>{blog.postedBy.full_name}</font>
                <font className={styles.in}>in</font>
                <font className={styles.categoryname}>
                  {blog.categories[0].name}
                </font>
              </Grid>
            </Grid>
            <a>
              <section className={styles.title}>{blog.title}</section>
              <section className={styles.subheading}>
                Read Top Stories With Author {blog.postedBy.full_name}
              </section>
            </a>
            <small className={styles.time}>
              {moment(blog.createdAt).format("MMM D")} .{" "}
              {readingTime(blog.body || " ").text}
            </small>
          </Box>
        </Box>
      </Link>
    );
  } else {
    return <></>;
  }
};

export default Card;

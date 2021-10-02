import styles from "../../../styles/BlogMediumCard.module.css";
import Image from "next/image";
import Link from "next/link";
const readingTime = require("reading-time");
import moment from "moment";
import renderHTML from "react-render-html";
import { Grid, Box } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ blog }) => {
  if (blog) {
    return (
      <Link href={`/${blog.slug}`}>
        <Box className={styles.outercontainer}>
          <Grid container justify="space-between">
            <Grid item xs={8} sm={8} md={8}>
              <Box position="relative" className={styles.left}>
                <Box className={styles.category}>
                  <font className={styles.name}>
                    {blog.postedBy.full_name.split(" ")[0]}
                  </font>
                  <font className={styles.in}>in</font>
                  <font className={styles.categoryname}>
                    {blog.categories[0].name}
                  </font>
                </Box>

                <Box>
                  <section className={styles.title}>{blog.title}</section>
                  <Box>
                    <Box className={styles.excerpt}>
                      {renderHTML(blog.excerpt)}
                    </Box>
                  </Box>
                </Box>

                <Box className={styles.time}>
                  {moment(blog && blog.createdAt).format("MMM D")} .
                  {readingTime(blog.body || " ").text}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <LazyLoadImage
                src={blog.featureImg}
                alt=""
                className={styles.featureImg}
              />
            </Grid>
          </Grid>
        </Box>
      </Link>
    );
  } else {
    return <></>;
  }
};

export default Card;

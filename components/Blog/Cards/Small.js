import styles from "../../../styles/BlogSmallCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Grid, Box } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
const readingTime = require("reading-time");
import moment from "moment";

const Card = ({ blog }) => {
  return (
    <Link href={`/${blog && blog.slug}`}>
      <Box className={styles.outercontainer}>
        <Grid container>
          <Grid item xs={8}>
            <Box className={styles.left}>
              <Box className={styles.category}></Box>
              <Box>
                <font className={styles.name}>
                  {blog &&
                    blog.postedBy &&
                    blog.postedBy.full_name.split(" ")[0]}
                </font>
                <font className={styles.in}>in</font>
                <font className={styles.categoryname}>
                  {blog && blog.categories && blog.categories[0].name}
                </font>
              </Box>

              <section className={styles.title}>{blog && blog.title}</section>
              <small className={styles.time}>
                {moment(blog && blog.createdAt).format("MMM D")} .{" "}
                {readingTime((blog && blog.body) || " ").text}
              </small>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <LazyLoadImage
              src={blog && blog.featureImg}
              alt=""
              className={styles.smallFeatureImage}
            />
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default Card;

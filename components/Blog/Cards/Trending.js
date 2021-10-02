import styles from "../../../styles/TrendingCard.module.css";
import Image from "next/image";
import Link from "next/link";
const readingTime = require("reading-time");
import moment from "moment";
import { Grid, Box } from "@material-ui/core";

const Card = ({ blog, count }) => {
  if (blog) {
    return (
      <Grid item md={4}>
        <Link href={`/${blog.slug}`}>
          <Box className={styles.outercontainer}>
            <Grid container>
              <Grid item xs={2}>
                <span className={styles.count}>0{count + 1}</span>
              </Grid>
              <Grid item xs={10}>
                <Box className={styles.category}></Box>

                <font className={styles.name}>
                  {blog.postedBy.full_name.split(" ")[0]}
                </font>
                <font className={styles.in}>in</font>
                <font className={styles.categoryname}>
                  {blog.categories[0].name}
                </font>

                <section className={styles.text}>{blog.title}</section>
                <small className={styles.time}>
                  {moment(blog.createdAt).format("MMM D")} .{" "}
                  {readingTime(blog.body || " ").text}
                </small>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
    );
  } else {
    return <></>;
  }
};

export default Card;

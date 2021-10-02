import Image from "next/image";
import { Typography, Grid, Box } from "@material-ui/core";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "../../../styles/BlogAuthor.module.css";
import Avatar from "../../Core/avatar";

const Author = ({ author }) => {
  if (author) {
    return (
      <Grid item xs={3} sm={3}>
        <Box className={styles.outercontainer}>
          <Avatar
            name={author.postedBy.full_name}
            src={author.postedBy.headshot_url}
            alt=""
            className={styles.authorImage}
          />
          <Typography noWrap className={styles.authorname}>
            {author.postedBy.full_name}
          </Typography>
        </Box>
      </Grid>
    );
  } else {
    return <></>;
  }
};
export default Author;

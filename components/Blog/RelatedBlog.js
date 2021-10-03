import { useEffect, useState } from "react";
import { related_blogs } from "../../actions/blog";
import dynamic from "next/dynamic";
import styles from "../../styles/Blog.module.css";
import { Grid } from "@material-ui/core";

const BlogLargeCard = dynamic(() => import("./Cards/Large"), {
  ssr: false,
});

const RelatedBlogs = ({ blog }) => {
  const [relatedBlogList, setRelatedBlogList] = useState();

  useEffect(() => {
    related_blogs({ blog: blog })
      .then((value) => {
        setRelatedBlogList(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function RelatedBlogListComponent() {
    if (relatedBlogList) {
      return (
        <Grid container justify="center">
          {relatedBlogList.map((eachblog, i) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={5}
                lg={3}
                xl={3}
                key={i}
                className={styles.eachblog}
              >
                <BlogLargeCard blog={eachblog} />
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return <></>;
    }
  }

  return <RelatedBlogListComponent />;
};

export default RelatedBlogs;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography, Grid } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import Skeleton from "react-loading-skeleton";
import BlogLargeCard from "../components/Blog/Cards/Large";
import SmallCardSkeleton from "../components/Blog/Cards/Skeletons/SmallCardSkeleton";
import AuthorCardSkeleton from "../components/Blog/Cards/Skeletons/AuthorCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
// import Sidebar from "../components/Core/Sidebar";
import Header from "../components/Home/Header";
import Layout from "../components/Layout";
import {
  SmallblogList,
  MediumblogList,
  AuthorList,
  TrendingList,
  ShowMoreBlogs,
} from "../utils/helpers";

import { blog_list, author_list, trending_list } from "../actions/blog";
import { random_categories } from "../actions/category";

const Home = ({
  largeBlogs,
  smallBlogs,
  mediumBlogs,
  blogsLimit,
  blogSkip,
  totalBlogs,
}) => {
  const [authors, setAuthors] = useState();
  const [trendingBlogs, setTrending] = useState();
  const [categories, setCategories] = useState();
  const [limit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [stopLoading, setStopLoading] = useState(false);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     myFunction();
  //   };
  //   var rightside = document.getElementById("rightbottom");
  //   // var sticky = rightside.offsetTop;
  //   function myFunction() {
  //     if (window.pageYOffset > 1000) {
  //       rightside.classList.add("fix-right-bottom");
  //     } else {
  //       rightside.classList.remove("fix-right-bottom");
  //     }
  //   }
  // });

  useEffect(() => {
    author_list()
      .then((response) => {
        setAuthors(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    trending_list()
      .then((response) => {
        setTrending(response);
      })
      .catch((err) => {
        console.log(err);
      });

    random_categories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function loadMore() {
    try {
      let toSkip = skip + limit;
      let data = await blog_list({ skip: toSkip, limit });
      if (data.length === 0) return setStopLoading(true);
      setLoadedBlogs([...loadedBlogs, ...data]);

      setSkip(toSkip);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  function ReadByCategories() {
    if (categories) {
      return categories.map((item, i) => {
        return (
          <Box key={i}>
            <Link href={`/category/${item.slug}`}>
              <a>
                <Typography variant="body1" className={styles.categoryName}>
                  {item.name}
                </Typography>
              </a>
            </Link>

            {categories.length !== i + 1 && <Box className={styles.line}></Box>}
          </Box>
        );
      });
    }
  }

  return (
    <>
      <Header />
      <Layout>
        <Grid container justify="center">
          <Grid item md={11} lg={11}>
            <Grid container justify="center">
              <Grid item xs={12} sm={5} md={4} lg={4}>
                {largeBlogs ? <BlogLargeCard blog={largeBlogs} /> : <></>}
              </Grid>
              <Grid item xs={12} sm={7} md={8} lg={4}>
                {smallBlogs
                  ? SmallblogList(smallBlogs)
                  : [{}, {}, {}].map((blog, i) => {
                      return <SmallCardSkeleton />;
                    })}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <Box className={styles.rightside}>
                  <Grid container>
                    <Grid sm={6} md={6} lg={12}>
                      <Box className={styles.authorSection}>
                        <Box className={styles.title1}>LATEST FROM AUTHORS</Box>
                        {authors ? (
                          <Grid container>{AuthorList(authors)}</Grid>
                        ) : (
                          <Grid container>
                            {[{}, {}, {}, {}, {}, {}, {}, {}].map(
                              (author, i) => {
                                return (
                                  <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <AuthorCardSkeleton />
                                  </Grid>
                                );
                              }
                            )}
                          </Grid>
                        )}
                        <Box>
                          <span style={{ color: "teal" }}>See more</span>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                      <Box className={styles.categorySection}>
                        <section>
                          <Box className={styles.title1}>TOPICS TO READ</Box>
                          {categories
                            ? ReadByCategories()
                            : [{}, {}, {}].map((category, i) => {
                                return <SmallCardSkeleton />;
                              })}
                          <Box pt={2}>
                            <Link href="/categories">
                              <a>
                                <span style={{ color: "teal" }}>See more</span>
                              </a>
                            </Link>
                          </Box>
                        </section>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            <section className={styles.title3}> TRENDING ON Broocode</section>
            <Grid container>{TrendingList(trendingBlogs)}</Grid>
            <Box mb={4} />
            <Grid container>
              <Grid item md={8}>
                {MediumblogList(mediumBlogs)}
                <InfiniteScroll
                  dataLength={loadedBlogs.length}
                  next={loadMore}
                  hasMore={true}
                  style={{ overflow: "hidden !important" }}
                  loader={
                    !stopLoading && (
                      <Grid container>
                        <Grid xs={8}>
                          <Box>
                            <Skeleton count={4} width={"90%"} />
                          </Box>
                        </Grid>
                        <Grid xs={4}>
                          <Skeleton width={"80%"} height={"100%"} />
                        </Grid>
                      </Grid>
                    )
                  }
                >
                  {ShowMoreBlogs(loadedBlogs)}
                </InfiniteScroll>

                {/*<Sidebar />*/}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

Home.getInitialProps = async () => {
  try {
    let skip = 0;
    let limit = 10;
    let blog = await blog_list();
    let largeBlogs = blog && blog[0];
    let smallBlogs = blog && blog.slice(1, 5);
    let mediumBlogs = blog && blog.slice(5);
    return {
      largeBlogs,
      smallBlogs,
      mediumBlogs,
      blogsLimit: limit,
      blogSkip: skip,
      totalBlogs: blog.length,
    };
  } catch (e) {
    return {
      error: e,
    };
  }
};
export default Home;

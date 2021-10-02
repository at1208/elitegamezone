import React from "react";
import { WbIncandescent } from "@material-ui/icons";
import { Grid, Box } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

export default function Sidebar() {
  const domains = [
    { src: "/travlojournal.svg", link: "http://travlojournal.com" },
    { src: "/artoftalk.svg", link: "http://artoftalk.in" },
    { src: "/elitegamezone.svg", link: "http://elitegamezone.com" },
    { src: "/vedifly.svg", link: "http://vedifly.com" },
    { src: "/geeksocean.svg", link: "http://geeksocean.com" },
  ];

  return (
    <Grid container>
      <Grid item md={4}>
        <section className="rightbottom" id="rightbottom">
          <Box className={styles.rightContainer}>
            <Box className={styles.rc}>
              <span>
                <WbIncandescent className={styles.ideaIcon} />
              </span>
              <label className={styles.exploreText}>Explore our IDEAS</label>
            </Box>

            <Grid container justify="center">
              <Grid item xs={6} sm={5} md={5} lg={5}></Grid>
            </Grid>

            <Grid container justify="center">
              {domains.map((domain, i) => {
                return (
                  <Grid item xs={6} sm={5} md={5} lg={5}>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img src="" className={styles.logo} />
                    </a>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Grid container justify="center">
            <Grid item>
              <span className={styles.field}>Help</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>Careers</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>Privacy</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>Terms</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>About</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>Contact</span>
            </Grid>
            <Grid item>
              <span className={styles.field}>Sponsor</span>
            </Grid>
          </Grid>
        </section>
      </Grid>
    </Grid>
  );
}

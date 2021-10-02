import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";

const AuthorCardSkeleton = () => {
  return (
    <Grid container>
      <Grid item xs={3} sm={3} md={3}>
        <Skeleton circle={true} height={50} width={50} />
      </Grid>
    </Grid>
  );
};

export default AuthorCardSkeleton;

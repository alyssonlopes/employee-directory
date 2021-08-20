import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  loading: {
    position: "relative",
    display: "block",
    margin: "0 auto",
  },
};

const Loading = () => {
  return <CircularProgress style={styles.loading} size={50} />;
};

export default Loading;

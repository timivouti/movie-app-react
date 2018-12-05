import { createStyles, withStyles, WithStyles } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as React from "react";

// material-ui styles as props

const styles = createStyles({
  container: {
    alignItems: "center",
    display: "flex",
    backgroundColor: "#FFFFFF",
    position: "fixed",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: 997,
    opacity: 0.5
  }
});

// extending material-ui styles as props

interface FullPageLoadingProps extends WithStyles<typeof styles> {}

// SFC component with loading indicator from material-ui

const FullPageLoading: React.SFC<FullPageLoadingProps> = (
  props: FullPageLoadingProps
) => {
  return (
    <div>
      <div className={props.classes.container}>
        <CircularProgress color="primary" />
      </div>
    </div>
  );
};

export default withStyles(styles)(FullPageLoading);

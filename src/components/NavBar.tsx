import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core/";
import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {}
};

interface NavBarProps {
  classes: any;
}

class NavBar extends React.Component<NavBarProps> {
  constructor(props: NavBarProps) {
    super(props);
  }

  public render() {
    return (
      <div className={this.props.classes.menuButton}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={this.props.classes.grow}
            >
              Movie App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

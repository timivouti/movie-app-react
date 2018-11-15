import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import StarIcon from "@material-ui/icons/Star";
import * as React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {},
  list: {
    width: 250
  }
};

interface INavBarProps extends WithStyles<typeof styles> {}

interface NavBarState {
  drawer: boolean;
}

type NavBarProps = INavBarProps & RouteComponentProps<{}>;

class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      drawer: false
    };
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
              onClick={this.handleDrawer}
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
        <div>
          <Drawer open={this.state.drawer} onClose={this.closeDrawer}>
            <div className={this.props.classes.list}>
              <List>
                <ListItem
                  onClick={this.handleTopMovies}
                  selected={this.props.location.pathname === "/"}
                >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Top Movies" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      </div>
    );
  }

  private handleDrawer = () => {
    this.setState({ drawer: true });
  };

  private closeDrawer = () => {
    this.setState({ drawer: false });
  };

  private handleTopMovies = () => {
    this.props.history.push("/");
  };
}

export default withRouter(withStyles(styles)(NavBar));

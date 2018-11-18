import {
  AppBar,
  createStyles,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import StarIcon from "@material-ui/icons/Star";
import UpdateIcon from "@material-ui/icons/Update";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ScheduleIcon from "@material-ui/icons/Schedule";
import * as React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    marginLeft: 8
  },
  menuButton: {},
  menuContainer: { zIndex: 999 },
  list: {
    width: 250
  }
});

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
      <div className={this.props.classes.menuContainer}>
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
                <ListSubheader>Movies</ListSubheader>
                <Divider />
                <ListItem
                  onClick={() => this.handlePush("/newmovies")}
                  selected={this.props.location.pathname === "/newmovies"}
                  button={true}
                >
                  <ListItemIcon>
                    <UpdateIcon />
                  </ListItemIcon>
                  <ListItemText primary="New" />
                </ListItem>
                <ListItem
                  onClick={() => this.handlePush("/popularmovies")}
                  selected={this.props.location.pathname === "/popularmovies"}
                  button={true}
                >
                  <ListItemIcon>
                    <TrendingUpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Popular" />
                </ListItem>
                <ListItem
                  onClick={() => this.handlePush("/")}
                  selected={this.props.location.pathname === "/"}
                  button={true}
                >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Top" />
                </ListItem>
                <ListItem
                  onClick={() => this.handlePush("/upcomingmovies")}
                  selected={this.props.location.pathname === "/upcomingmovies"}
                  button={true}
                >
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Upcoming" />
                </ListItem>
                <ListSubheader>Tv-Series</ListSubheader>
                <Divider />
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

  private handlePush = (route: string) => {
    this.closeDrawer();
    this.props.history.push(route);
  };
}

export default withRouter(withStyles(styles)(NavBar));

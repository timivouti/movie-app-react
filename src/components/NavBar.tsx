import {
  AppBar,
  createStyles,
  Drawer,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core/";
import { fade } from "@material-ui/core/styles/colorManipulator";
import StarIcon from "@material-ui/icons/Star";
import UpdateIcon from "@material-ui/icons/Update";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import * as _ from "lodash";

const styles = (theme: any) =>
  createStyles({
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
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit,
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  });

interface INavBarProps extends WithStyles<typeof styles> {}

interface NavBarState {
  drawer: boolean;
  searchValue?: string;
}

type NavBarProps = INavBarProps & RouteComponentProps<{}>;

class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      drawer: false,
      searchValue: undefined
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
            <div className={this.props.classes.search}>
              <div className={this.props.classes.searchIcon}>
                <IconButton color="inherit" aria-label="Menu">
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: this.props.classes.inputRoot,
                  input: this.props.classes.inputInput
                }}
                onChange={this.handleChange}
                onKeyPress={this.handlekeyPress}
              />
            </div>
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

  private handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({ searchValue: event.target.value });
    if (event.target.value && event.target.value.length > 0) {
      const debounce = _.debounce(
        () => this.props.history.push(`/search/${this.state.searchValue}`),
        2000
      );
      debounce();
    }
  };

  private handlekeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      this.state.searchValue &&
      this.state.searchValue.length > 0 &&
      event.key === "Enter"
    ) {
      this.props.history.push(`/search/${this.state.searchValue}`);
    }
  };
}

export default withRouter(withStyles(styles)(NavBar));

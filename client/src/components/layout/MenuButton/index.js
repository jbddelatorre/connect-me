import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListIcon from '@material-ui/icons/List';

import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = theme => ({
  icon:{
    color: 'white',
  }
})

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuClose = (e,logout) => {
    this.handleClose();
    logout(e)
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, signedIn, handleLogout } = this.props

    return (
      signedIn ? 
        <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.icon}
        >
          <ListIcon iconStyles={{height:'50px',width:'50px'}}/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem component={Link} to="/posts" onClick={this.handleClose}>
              {'Post Feed'}
          </MenuItem>
          <MenuItem component={Link} to="/profile" onClick={this.handleClose}>
              {'My Profile'}
          </MenuItem>
          <MenuItem onClick={(e)=>this.handleMenuClose(e, handleLogout)}>
              {'Log Out'}
          </MenuItem>
        </Menu>
      </div>
      :
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.icon}
        >
          <ListIcon iconStyles={{height:'150px',width:'50px'}}/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem component={Link} to="/signup" onClick={this.handleClose}>
              {'Sign Up'}
          </MenuItem>
          <MenuItem component={Link} to="/login" onClick={this.handleClose}>
              {'Log In'}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(LongMenu);

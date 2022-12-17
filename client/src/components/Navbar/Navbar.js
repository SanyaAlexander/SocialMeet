import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import {Link} from 'react-router-dom';
import socialmeet from  "../../images/socialmeet.png";

const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">SocialMeet</Typography>
        <img className={classes.image} src={socialmeet} alt="SocialMeet" height={60}/>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imagUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" >Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
            )}
        </Toolbar>
        </AppBar>
);
};

export default Navbar;
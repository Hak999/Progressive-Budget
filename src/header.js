import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import SignalWifi0BarIcon from '@material-ui/icons/SignalWifi0Bar';
import { Offline, Online } from "react-detect-offline";
import SignalWifi3BarIcon from '@material-ui/icons/SignalWifi3Bar';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tracker
                    </Typography>
                    <Online>
                        <Badge color="primary" variant="dot" invisible={false}>
                            Online <SignalWifi3BarIcon />
                        </Badge>
                    </Online>
                    <Offline>
                        <Badge color="secondary" variant="dot" invisible={false}>
                            Offline <SignalWifi0BarIcon />
                        </Badge>
                    </Offline>

                </Toolbar>
            </AppBar>
        </div>
    );
}

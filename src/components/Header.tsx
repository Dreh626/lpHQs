import React, { useEffect, useState } from 'react';
import { makeStyles, AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Sort, ExpandMore } from '@material-ui/icons';
import { Link as Scroll } from "react-scroll";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',

    },
    appbar: {
        background: 'rgba(0, 0, 0, 0.2)',
        boxShadow: 'none !important',

    },
    toolbar: {
        width: '80%',
        margin: '0 auto',
    },
    hq: {
        color: '#FF7020',
        fontSize: '1.2em',
        fonWeight: '700',
    },
    appTitle: {
        flex: '1',
    },
    icon: {
        color: '#FFF',
        fontSize: '1em',
    },
    container: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '3rem',
    },
    goDown: {
        color: '#FF7020',
        fontSize: '4rem',
    }
}));

const options = [
    'Menu',
    'Sobre',
    'Contato'

];

const ITEM_HEIGHT = 48;

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <h1 className={classes.appTitle}>Fórum <span className={classes.hq}>HQ</span></h1>
                    <IconButton aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <Sort className={classes.icon} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} collapsedSize={50} {...(checked ? { timeout: 1000 } : {})}>
                <div className={classes.container}>
                    <h2 >Notícias sobre<br /> <span className={classes.hq}>HQs</span></h2>
                    <Scroll to="notice-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMore className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}
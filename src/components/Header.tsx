import React, { useEffect, useState } from 'react';
import { makeStyles, AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import {Sort, ExpandMore} from '@material-ui/icons';
import { Link as Scroll } from "react-scroll";



const useStyles = makeStyles((theme) => ({

    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily: 'Nunito',

    },
    appbar:{
        background: 'none',
        boxShadow: 'none !important',
        
    },
    toolbar:{
        width: '80%',
        margin: '0 auto',
    },
    hq:{
        color: '#FF7020',
        fontSize: '1.2em',
        fonWeight: '700',
    },
    appTitle:{
        flex: '1',
    },
    icon:{
        color: '#FFF',
        fontSize: '1em',
    },
    container:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:'3rem',
    },
    goDown:{
        color: '#FF7020',
        fontSize: '4rem',
    }
}));

export default function Header(){
    const classes = useStyles();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        setChecked(true);
    },[])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                <h1 className={classes.appTitle}>Fórum <span className={classes.hq}>HQ</span></h1>
                <IconButton>
                    <Sort className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} collapsedSize={50} {...(checked ? {timeout: 1000} : {})}>
            <div className={classes.container}>
                <h2 >Noticias sobre<br /> <span className={classes.hq}>HQs</span></h2>
                <Scroll to="notice-to-visit" smooth={true}>
                <IconButton>
                    <ExpandMore className={classes.goDown}/>
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
        </div>
    )
}
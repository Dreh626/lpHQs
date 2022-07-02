import React from 'react';
import { CssBaseline, makeStyles} from '@material-ui/core';
import Header from './components/Header';

const useStyles = makeStyles((theme) =>({
    root: {
        minHeight: '100vh',
        background: `url(${process.env.PUBLIC_URL + "/assets/background.jpg"}) no-repeat`,
        backgroundSize: 'cover',
    },
}));

export default function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Header />
        </div>
    )}
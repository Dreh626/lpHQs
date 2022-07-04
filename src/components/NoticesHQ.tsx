import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageCard from './ImageCard';
import Notices from '../static/notice';
import useWindowPosition from '../hooks/useWindowPosition';



const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

})); 

export default function (){
    const classes = useStyles();
    const checked = useWindowPosition({id: 'header'});

    return(
        <div className={classes.root}>
            <ImageCard notice={Notices[0]}/>
            <ImageCard notice={Notices[1]}/>
        </div>
    )
}
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import ImageCard from './ImageCard';
import Notices from '../static/notice';
import useWindowPosition from '../hooks/useWindowPosition';




const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
                      
        }
    }

})); 

export default function (){
    const classes = useStyles();
    const checked = useWindowPosition({id: 'header'});

    return(
        <div className={classes.root} id="notice-to-visit">
            <ImageCard notice={Notices[0]} checked={checked}/>
            <ImageCard notice={Notices[1]} checked={checked}/>
        </div>
    )
}
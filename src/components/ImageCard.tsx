import React, { Component} from 'react';
import { makeStyles, Collapse } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    width: '100vh',
    height: '600px',
    background: 'rgba(0, 0, 0, 0.5)',
    margin: '20px',
    "&:hover $media": {
      transform: 'scale(1.06)',
    },
    [theme.breakpoints.down('md')]:{
        maxWidth: 300,
    }
  },
  media: {
    height: 440,
    maxHeight: '440px',
    transition: 'all 0.2s ease-out',
    

  },
  title:{
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#FFF',

  },
  description:{
    fontFamily: 'Nunito',
    fontSize: '1rem',
    padding:'0.5rem',
    color: '#DDD',
    [theme.breakpoints.down('md')]:{
      display: 'none',
  }
  }
}));

export type imageCardProps = {
  notice: {
    imageUrl: string
    title: string
    description: string

  }
  checked: boolean

}

export default function ImageCard( {notice, checked}:imageCardProps) {
  const classes = useStyles();

  return (
    <Collapse in={Boolean(checked)} {...(checked ? {timeout: 1000} : {})}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image= { notice.imageUrl }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {notice.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {notice.description}
          </Typography>
        </CardContent>
    </Card>
    </Collapse>
  );
}
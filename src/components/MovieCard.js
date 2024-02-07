import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';


export const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: 350, height: 700 }} >
      <CardMedia
        sx={{ height: 500 }}
        image={movie.posterURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <Rating  value={movie.rating} readOnly />
    </Card>
  )
}

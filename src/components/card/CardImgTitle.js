import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import race from '../../assets/race.jpg';

export default function CardImgTitle({img, title, description}) {
  return (
    <Card sx={{ }}>
      <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
        <CardMedia
          sx={{width: '62%'}}
          component="img"
          height="100"
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{width: '50%'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
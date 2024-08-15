import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import work from '../../assets/work.jpg';

export default function WorkCardTitle() {
  return (
    <Card sx={{ }}>
      <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
        <CardMedia
          sx={{width: '62%'}}
          component="img"
          height="100"
          image={work}
          alt="green iguana"
        />
        <CardContent sx={{width: '50%'}}>
          <Typography gutterBottom variant="h5" component="div">
            Praca
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Idź do pracy jako mechanik, żeby zarobić trochę pieniędzy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
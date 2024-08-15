import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import training from '../../assets/training.jpg';

export default function TrainingCardTitle() {
  return (
    <Card sx={{ }}>
      <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
        <CardMedia
          sx={{width: '62%'}}
          component="img"
          height="100"
          image={training}
          alt="green iguana"
        />
        <CardContent sx={{width: '50%'}}>
          <Typography gutterBottom variant="h5" component="div">
            Trening
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rozpocznij trening, aby podszlifować swoje umiejętności oraz zyskać doświadczenie
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
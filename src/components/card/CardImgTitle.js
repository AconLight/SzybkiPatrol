import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box, Divider } from '@mui/material';
import Space from '../group/Space';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function CardImgTitle({img, title, description, isMain}) {
  return (
    <Box>
      <Card sx={{borderBottom: isMain ? 0 : 0 }}>
      <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
        <CardMedia
          sx={{width: isMain ? '62%' : '38%'}}
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
    {isMain && (
      <Box sx={{p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
        <KeyboardDoubleArrowDownIcon />
      </Box>
      )}
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function JobCard({jobName, jobDescription, link}) {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Job Title
        </Typography>
        <Typography variant="h5" component="div">
          {jobName}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Job Description</Typography>
        <Typography variant="body2">
          {jobDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small" href={link}>APPLY NOW</Button>
        <FavoriteBorderIcon />
      </CardActions>
    </Card>
  );
}

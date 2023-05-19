import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const CardTestOne = (props) => {
  return (
    <React.Fragment>
      <Card sx={{maxWidth: 270 }}>
        <CardMedia
          sx={{height: 140}}
          image={props.item.img}
          title={props.item.titleCard}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
export default CardTestOne;

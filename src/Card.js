import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Parser from "html-react-parser";

export default function MediaCard(props) {
  const { imgSrc, name, summary, handleOpen } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="500" image={imgSrc} alt={imgSrc} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Parser(summary)}
        </Typography>
      </CardContent>
      <CardActions onClick={() => handleOpen(name)}>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}

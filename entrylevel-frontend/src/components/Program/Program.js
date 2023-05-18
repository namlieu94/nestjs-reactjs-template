import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from "moment";

const Program = (props) => {
  const { data } = props;
  return (
    <Grid item key={data.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={data.thumbnail_img_url || ''}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.display_title}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography>
            {moment(data.start_date).format("DD MMM")} -{" "}
            {moment(data.end_date).format("DD MMM")}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Program;

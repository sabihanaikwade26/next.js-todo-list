import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export default function Task(props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {props.id}
        </Typography>
        <Typography variant="body2" color="text">
          Description: {props.description}
        </Typography>
        <Typography variant="body2" color="text">
          Done: {props.isDone ? ("✔️") : ("❌")}
        </Typography>
      </CardContent>
      <CardActions>
        {props.isDone ? (
          <Button size="small" onClick={() => props.markTaskAsUndone(props.id)}>Mark as undone</Button>
        ) : (
          <Button size="small" onClick={() => props.markTaskAsDone(props.id)}>Mark as done</Button>
        )}
        <Button size="small" onClick={() => props.deleteTask(props.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
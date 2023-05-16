import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Box, Container, Grid} from "@mui/material";
import Task from "../components/Task";
import * as React from "react";
import {useEffect, useState} from "react";
import Link from "next/link";
import useGlobalStore from "@/store/storage";

export default function Home() {

  const storeTasks = useGlobalStore((state) => state.tasks);
  const storeDeleteTask = useGlobalStore((state) => state.deleteTask);
  const storeClearTasks = useGlobalStore((state) => state.clearTasks);
  const storeMarkTaskAsDone = useGlobalStore((state) => state.markTaskAsDone);
  const storeMarkTaskAsUndone = useGlobalStore((state) => state.markTaskAsUndone);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(storeTasks);
  }, [storeTasks]);

  return (
    <Container maxWidth="lg">
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h4" component="h1" sx={{my: 2}}>
          <a href="https://github.com/duplxey/back4app-containers-nextjs">nextjs-todo</a>
        </Typography>
        <Box>
          <Button sx={{maxHeight: 32}}><Link href="/add" passHref>Add task</Link></Button>
          <Button color="warning" onClick={storeClearTasks}>Clear tasks</Button>
        </Box>
      </Box>
      {!tasks.length ? (
        <Card>
          <CardContent>
            <Typography variant="body2" color="text" component="div">
              Oops, there are no tasks yet.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid item xs={12} md={4} key={task.id}>
              <Task
                {...task}
                markTaskAsDone={storeMarkTaskAsDone}
                markTaskAsUndone={storeMarkTaskAsUndone}
                deleteTask={storeDeleteTask}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

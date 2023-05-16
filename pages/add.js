import * as React from "react";
import {useState} from "react";
import {Box, Container, FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Link from "next/link";
import {useRouter} from "next/router";
import useGlobalStore from "@/store/storage";

export default function Add() {

  const router = useRouter();
  const storeAddTask = useGlobalStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = () => {
    storeAddTask({
      title: title,
      description: description,
      isDone: isDone,
    });
    router.push("/");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h4" component="h1" sx={{my: 2}}>
          <a href="https://github.com/duplxey/back4app-containers-nextjs">nextjs-todo</a>
        </Typography>
        <Link href="/" passHref><Button variant="text" sx={{maxHeight: 32}}>View tasks</Button></Link>
      </Box>
      <Card>
        <CardContent>
          <TextField
            label="Title"
            variant="outlined"
            size="small"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            sx={{mb: 2}}
            fullWidth
          />
          <TextField
            label="Description"
            variant="outlined"
            size="small"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            sx={{mb: 2}}
            rows={3}
            multiline
            fullWidth
          />
          <FormGroup sx={{mb: 2}}>
            <FormControlLabel
              control={
                <Switch checked={isDone} onClick={() => setIsDone(!isDone)}/>
              }
              label="Is done?"/>
          </FormGroup>
          <Button
            variant="contained"
            onClick={handleSubmit}
            type="submit"
          >
            Add task
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
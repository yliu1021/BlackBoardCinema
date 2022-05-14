import React, { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function MoviesView(props) {
  const movies = props.movies
  const onClose = props.onClose
  const [open, setOpen] = useState(true);
  
  const handleClose = (value) => {
    setOpen(false)
    onClose(value)
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Select Movie</DialogTitle>
        <List sx={{ pt: 0 }}>
        {movies.map((movie) => (
          <ListItem button onClick={() => handleClose(movie)} key={movie.id}>
            <ListItemText primary={movie.title} secondary={movie.description} />
            <img src={movie.image} alt={movie.description} height="100"></img>
          </ListItem>
        ))}
        </List>

      </Dialog>
    </div>
  )
}

export default MoviesView

import React, { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';

function MoviesView(props) {
  const movies = props.movies
  const onClose = props.onClose
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(movies[0]);
  
  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
    onClose(value)
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Select Movie</DialogTitle>
        <List sx={{ pt: 0 }}>
        {movies.map((movie) => (
          <ListItem button onClick={() => handleClose(movie)} key={movie.id}>
            <ListItemText primary={movie.title} />
          </ListItem>
        ))}
        </List>

      </Dialog>
    </div>
  )
}

export default MoviesView

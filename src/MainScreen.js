import { useState } from "react";
import { subscribeRatings } from "./movies";
import RatingsView from "./RatingsView";
import RatingsChartView from "./RatingsChart";

import { Typography, Skeleton, List, ListItem, Box, AppBar, IconButton, Toolbar, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function MainScreen(props) {
  const [ratings, setRatings] = useState(null);

  subscribeRatings(setRatings);

  let ratingsView;
  if (ratings) {
    ratingsView = <RatingsView ratings={ratings} />;
  } else {
    ratingsView = (
      <List>
        <ListItem key="1">
          <Skeleton variant="rectangular" />
        </ListItem>
        <ListItem key="2">
          <Skeleton variant="rectangular" />
        </ListItem>
        <ListItem key="3">
          <Skeleton variant="rectangular" />
        </ListItem>
      </List>
    );
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Welcome {props.name}</Typography>
          <IconButton color="inherit" aria-label="delete" component={Link} to="/review">
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack direction="row" spacing={2}>
        <Box maxWidth="35%">
          {ratingsView}
        </Box>
        <RatingsChartView ratings={ratings} />
      </Stack>
    </Box>
  );
}

import { useState } from "react";
import { subscribeRatings } from "./movies";
import RatingsView from "./RatingsView";

import { Typography, Skeleton, List, ListItem } from "@mui/material";

function MainScreen(props) {
  const [ratings, setRatings] = useState(null);

  subscribeRatings(setRatings);

  let ratingsView;
  if (ratings) {
    ratingsView = <RatingsView ratings={ratings} />;
  } else {
    ratingsView = (
      <List>
        <ListItem>
          <Skeleton variant="rectangular" width={"20%"} />
        </ListItem>
        <ListItem>
          <Skeleton variant="rectangular" width={"20%"} />
        </ListItem>
        <ListItem>
          <Skeleton variant="rectangular" width={"20%"} />
        </ListItem>
      </List>
    );
  }

  return (
    <div>
      <Typography component="h1" variant="h2">Welcome {props.name}</Typography>
      {ratingsView}
    </div>
  );
}

export default MainScreen;

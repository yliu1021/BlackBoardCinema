import { useState } from "react";
import { subscribeRatings } from "./movies";
import RatingsView from "./RatingsView";

function MainScreen(props) {
  const [ratings, setRatings] = useState(null);

  subscribeRatings(setRatings);

  let ratingsView;
  if (ratings) {
    ratingsView = <RatingsView ratings={ratings} />;
  } else {
    ratingsView = <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome {props.name}</h1>
      {ratingsView}
    </div>
  );
}

export default MainScreen;

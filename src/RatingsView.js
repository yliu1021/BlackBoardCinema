import { Divider, List, ListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"

function RatingsView(props) {
  const ratings = props.ratings
  const listView = []
  ratings.forEach(rating => {
    listView.push(
      <ListItem key={rating.id}>
        <Box>
          <Typography variant="h6" gutterBottom>{rating.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{rating.reviewer}</Typography>
          <Typography variant="body2" gutterBottom>Quality: {rating.metrics["quality"]}</Typography>
          <Typography variant="body2" gutterBottom>Entertainment: {rating.metrics["entertainment"]}</Typography>
        </Box>
      </ListItem>
    )
    listView.push(
      <Divider key={`${rating.id}-divider`} />
    )
  })
  listView.pop()
  return (
    <div>
      <List>{listView}</List>
    </div >
  )
}

export default RatingsView

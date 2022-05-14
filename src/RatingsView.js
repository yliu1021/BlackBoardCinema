import { List, ListItem } from "@mui/material"

function RatingsView(props) {
  const ratings = props.ratings
  const listView = ratings.map(rating => {
    return (
      <ListItem key={rating.id}>
        <div>
          <b>{rating.title}</b>
          <i>{rating.reviewer}</i>
        </div>
      </ListItem>
    )
  })
  return (
    <div>
      <List>{listView}</List>
    </div >
  )
}

export default RatingsView

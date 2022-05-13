function RatingsView(props) {
  const ratings = props.ratings
  const listView = ratings.map(rating => {
    return (
      <li key={rating.id}>
        <div>
          <b>{rating.title}</b>
          <i>{rating.reviewer}</i>
        </div>
      </li>
    )
  })
  return (
    <div>
      <ol>
        {listView}
      </ol>
    </div>
  )
}

export default RatingsView

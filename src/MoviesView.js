function MoviesView(props) {
  const movies = props.movies
  const listView = movies.map(movie => {
    return (
      <li key={movie.id}>
        <div>
          <b>{movie.title}</b>
          <i>{movie.description}</i>
          {/* // movie.image is the url to the title image */}
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

export default MoviesView

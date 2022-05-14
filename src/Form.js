import React, { useState } from "react";
import { sendRating } from "./movies"
import { Timestamp } from "firebase/firestore";
import MoviesView from "./MoviesDialogView";
import Button from '@mui/material/Button';

function Form() {
    const [name, setName] = useState('')
    const [query, setQuery] = useState('')
    const [entertainment, setEntertainment] = useState(0)
    const [quality, setQuality] = useState(0)
    const [movies, setMovies] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null)
    var display_title = ''
    
    let moviesView;
    if (movies) {
        moviesView = <MoviesView movies={movies} onClose={setSelectedMovie} />; //onClose={selectedMovie => setTitle(selectedMovie)}
    } else {
        moviesView = <p>Hit Search For a Movie</p>;
    }

    if (selectedMovie) {
        display_title = selectedMovie.title
    } else {
        display_title = ''
    }
    function handleSubmit(event) {
        //Firebase
        sendRating({
            timestamp: Timestamp.now().toDate(),
            reviewer: name,
            title: selectedMovie.title,
            imdb_id: selectedMovie.id,
            imdb_pic: selectedMovie.image,
            metrics: {
                entertainment: parseFloat(entertainment),
                quality: parseFloat(quality)
            }
        })
        alert('Your review for "' + selectedMovie.title + '" was submitted by with a score of ' + entertainment + '&' + quality)
        event.preventDefault()
    }

    function handleTitleSearch(e) {
        // imdb
        e.preventDefault()
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch('https://imdb-api.com/en/API/Search/k_u4bk3o8g/' + encodeURIComponent(query), requestOptions)
            .then(response => response.json())
            .then(result => setMovies(result["results"]))
            .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <div>
                <input
                    placeholder="What film are you reviewing?"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <p>{display_title}</p>
                
            </div>
              
            <Button onClick={handleTitleSearch} variant="contained">
                Search For a Movie
            </Button>
            
            {moviesView}    

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="What's your name?"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div>
                    <p>
                        Entertainment Rating: {entertainment}
                    </p>
                    <input
                        type="range"
                        min="-10"
                        max="10"
                        step="1"
                        value={entertainment}
                        onChange={(e) => setEntertainment(e.target.value)} />
                </div>

                <div>
                    <p>
                        Quality Rating: {quality}
                    </p>
                    <input
                        type="range"
                        min="-10"
                        max="10"
                        step="1"
                        value={quality}
                        onChange={(e) => setQuality(e.target.value)} />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;

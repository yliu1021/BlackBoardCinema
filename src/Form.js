import React, { useState } from "react";
import { sendRating } from "./movies"
import { Timestamp } from "firebase/firestore";

function Form() {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [entertainment, setEntertainment] = useState(0)
    const [quality, setQuality] = useState(0)

    function handleSubmit(event) {
        //Firebase
        sendRating({
            timestamp: Timestamp.now().toDate(),
            reviewer: name,
            title: title,
            metrics: {
                entertainment: entertainment,
                quality: quality
            }
        })
        alert('The movie "' + title + '" was reviewed by "' + name + '" with a score of ' + entertainment + '&' + quality)
        event.preventDefault()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="What's your name?"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input
                        placeholder="What film are you reviewing?"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
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

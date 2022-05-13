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

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '', title: '', entertainment: 0, isMousedOver: false }

//         // this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleMouseOver = this.handleMouseOver.bind(this);
//     }

//     // handleChange(event) {
//     //     this.setState({ 
//     //         name: event.target.name,
//     //         title: event.target.title,
//     //         entertainment: event.target.entertainment
//     //     });
//     // }

//     handleSubmit(event) {
//         alert('The movie "' + this.state.title + '" was reviewed by "' + this.state.name + '" with a score of ' + this.state.entertainment);
//         event.preventDefault();
//     }

//     handleMouseOver() {
//         this.setState({ 
//             isMousedOver: !this.state.isMousedOver
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input 
//                         placeholder="What's your name?" 
//                         type="text"
//                         value={this.state.name}
//                         onChange={(e) => {this.setState({...this.state, name : e.target.value})}} 
//                         />
//                     </div>
//                     <div>
//                         <input 
//                         placeholder="What film are you reviewing?" 
//                         type="text" 
//                         value={this.state.title} 
//                         onChange={(e) => {this.setState({title : e.target.value, ...this.state})}} />
//                     </div>
//                     {/* <div>
//                         <p>
//                             Entertainment Rating: {this.state.entertainment} 
//                         </p>
//                         <input 
//                         type="range" 
//                         min="-10" 
//                         max="10" 
//                         step="1"
//                         entertainment={this.state.entertainment}
//                         onChange={this.handleChange} />
//                     </div> */}

//                     <button
//                         style={{ backgroundColor: this.state.isMousedOver ? "Green" : "white" }}
//                         type="submit"
//                         onMouseOver={this.handleMouseOver}
//                         onMouseOut={this.handleMouseOver}
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         );
//     }
//}

export default Form;

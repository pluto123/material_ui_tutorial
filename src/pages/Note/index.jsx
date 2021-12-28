import { Component } from 'react'
import Container from '@material-ui/core/Container'
import fetch from 'isomorphic-fetch'
import NoteCard from '../../components/NoteCard'
import Masonry from 'react-masonry-css'
import './index.css'

const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
}

export default class Note extends Component {
    state = {
        notes: []
    }

    async componentDidMount() {
        let response = await fetch(`http://localhost:8000/notes`);
        const notes = response.ok ? await response.json() : null
        console.log(notes)
        this.setState({notes})
    }

    handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:8000/notes/` + id, {
            method: 'DELETE'
        })

        const {notes} = this.state
        const newNotes = notes.filter(note => note.id !== id)
        this.setState({notes:newNotes})
    }

    render() {
        const {notes} = this.state
        return (
            <Container>
                <Masonry
                   breakpointCols={breakpoints}
                   className="my-masonry-grid"
                   columnClassName="my-masonry-grid_column" 
                >
                    {notes.map(note => (
                        <div item key={note.id}>
                            <NoteCard {...note} handleDelete={this.handleDelete}/>
                        </div>
                    ))}
                </Masonry>
            </Container>
        )
    }
}
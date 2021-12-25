import { Component } from 'react'
import Container from '@material-ui/core/Container'
import fetch from 'isomorphic-fetch'
import Grid from '@material-ui/core/Grid'
import NoteCard from '../components/NoteCard'

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
                <Grid container spacing={3}>
                    {notes.map(note => (
                        <Grid item key={note.id} xs={12} md={6} lg={4}>
                            <NoteCard {...note} handleDelete={this.handleDelete}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}
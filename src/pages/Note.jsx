import { Component } from 'react'
import Container from '@material-ui/core/Container'
import fetch from 'isomorphic-fetch'


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

    render() {
        const {notes} = this.state
        return (
            <Container>
                {notes.map(note => <p key={note.id}>{note.title}</p>)}
            </Container>
        )
    }

}
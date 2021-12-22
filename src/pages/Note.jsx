import { Component } from 'react'
import Container from '@material-ui/core/Container'
import fetch from 'isomorphic-fetch'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

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
                <Grid container>
                    {notes.map(note => (
                        <Grid item key={note.id} xs={12} md={6} lg={4}>
                            <Paper>{note.title}</Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}
import { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default class Create extends Component {
    render() {
        return (
            <Container>
                <Typography variant="h1" color="primary" align="center">
                    Create a new Note
                </Typography>
                <Typography noWrap color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="h6">
                    h6
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    h2
                </Typography>
                <Typography variant="h6" component="h2">
                    h2
                </Typography>
                <br />

                <Button type="submit">Submit</Button>
                <Button type="submit" color="secondary" variant="contained">Submit</Button>
                <Button type="submit" color="secondary" variant="outlined">Submit</Button>
                <br />
                <br />
                <ButtonGroup color="secondary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <br />
                <br />
                <ButtonGroup variant="contained" color="secondary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <br />
                <br />
                <Button onClick={() => console.log('You clicked me')}type="submit" color="secondary" variant="contained">Submit</Button>
            </Container>
        )
    }
}
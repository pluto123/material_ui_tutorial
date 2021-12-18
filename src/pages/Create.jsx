import { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class Create extends Component {
    render() {
        return (
            <Container>
            <Typography
                variant="h6" 
                color="textSecondary" 
                component="h2" 
                gutterBottom
            >
                Create a new note
            </Typography>
            <Button
                onClick={() => console.log('You clicked me')}
                type="sumbit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
            <br />
            <br />
            <Button
                type="sumbit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
        )
    }
}

export default Create
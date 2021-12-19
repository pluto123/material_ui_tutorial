import { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { withStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'

const useStyles = () => ({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

class Create extends Component {
    state = {
        title: '',
        details: '',
        titleError: false,
        detailsError: false
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value.trim()})
    }

    handleDetails = (e) => {
        this.setState({details: e.target.value.trim()})
    }

    handleSubmit = (e) => {
        const {title, details} = this.state

        e.preventDefault()
        if (title === '') {
            this.setState({titleError: true})
        }
        else {
            this.setState({titleError: false})
        }
        if (details === '') {
            this.setState({detailsError: true})
        }
        else {
            this.setState({detailsError: false})
        }

        console.log(this.state)
    }

    render() {
        const { classes } = this.props
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
                <form noValidate autoComplete="off">
                    <TextField 
                        onChange={this.handleTitle}
                        className={classes.field}
                        label="Note Title"
                        color="secondary"
                        variant="outlined"
                        fullWidth
                        required
                        error={this.state.titleError}
                    />
                    <TextField 
                        onChange={this.handleDetails}
                        className={classes.field}
                        label="Details"
                        color="secondary"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={this.state.detailsError}
                    />
                    <Button
                        onClick={this.handleSubmit}
                        type="sumbit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        )
    }
}

export default withStyles(useStyles) (Create)
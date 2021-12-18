import { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { withStyles } from "@material-ui/core/styles"

const useStyles = () => ({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    }
})

class Create extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container>
            <Typography
                className={classes.title} 
                variant="h6" 
                color="textSecondary" 
                component="h2" 
                gutterBottom
            >
                Create a new note
            </Typography>
            <Button 
                className={classes.btn}
                onClick={() => console.log('You clicked me')}
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

export default withStyles(useStyles) (Create)
import { Component } from 'react'
import Typography from '@material-ui/core/Typography'

export default class Create extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
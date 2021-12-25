import { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'
import { IconButton, Typography} from '@material-ui/core'

export default class NoteCard extends Component {
    render() {
        const {id, title, category, details} = this.props

        return (
            <div>
                <Card elevation={1}>
                    <CardHeader
                        action={
                            <IconButton onClick={() => this.props.handleDelete(id)}>
                                <DeleteOutlined />
                            </IconButton>
                        }
                        title={title}
                        subheader={category}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {details}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
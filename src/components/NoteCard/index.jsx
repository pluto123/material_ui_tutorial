import { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'
import { IconButton, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from "@material-ui/core/styles"

const useStyles = () => ({
    red_border: {
        border: '1px red solid'
    }
})

class NoteCard extends Component {
    render() {
        const {id, title, category, details, classes} = this.props

        return (
            <div>
                <Card elevation={1} className={(category === 'work')?classes.red_border:null}>
                    <CardHeader
                        avatar={
                            <Avatar>
                                {category[0].toUpperCase()}
                            </Avatar>
                        }
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

export default withStyles(useStyles) (NoteCard)
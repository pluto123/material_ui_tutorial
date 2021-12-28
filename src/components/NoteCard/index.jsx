import { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'
import { IconButton, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from "@material-ui/core/styles"
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = () => ({
    red_border: {
        border: '1px red solid'
    },
    avatar_work: {
        backgroundColor: yellow[700]
    },
    avatar_money: {
        backgroundColor: green
    },
    avatar_todos: {
        backgroundColor: pink[500]
    },
    avatar_others: {
        backgroundColor: blue[500]
    }
})

const checkCategory = (category, classes) => (
    (category === 'work')?classes.red_border:null    
)

const getAvatar = (category, classes) => {
    if (category === 'work') {
        return classes.avatar_work
    }
    if (category === 'money') {
        return classes.avatar_money
    }
    if (category === 'todos') {
        return classes.avatar_todos
    }
    return classes.avatar_others
}

class NoteCard extends Component {
    render() {
        const {id, title, category, details, classes} = this.props

        return (
            <div>
                <Card elevation={1} className={checkCategory(category, classes)}>
                    <CardHeader
                        avatar={
                            <Avatar className={getAvatar(category, classes)}>
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
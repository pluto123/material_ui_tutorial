import { Drawer, Typography } from '@material-ui/core'
import { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch, Link } from 'react-router-dom'
import Create from '../../pages/Create'
import Note from '../../pages/Note'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'

const drawerWith = 240

const useStyles = () => ({
    page: {
        background: '#F9F9F9',
        width: '100%'
    },
    drawer: {
        width: drawerWith
    },
    drawerPaper: {
        width: drawerWith
    },
    root: {
        display: 'flex'
    }
})

const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/create'
    }
]

class Layout extends Component {
    state = {
        path: '/'
    }

    handleListItemClick = (path) => {
        this.setState({path})
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                {console.log(window.location.pathname)}
                {/* app bar */}
                {/* side drawer */}
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    anchor="left"
                    classes={{ paper: classes.drawerPaper}}
                >
                    <div>
                        <Typography variant="h5">
                            Steven Notes
                        </Typography>
                    </div>

                    {/* list / links */}
                    <List>
                        {menuItems.map(item => (
                            <ListItem
                                key={item.text}
                                button
                                component={Link}
                                to={item.path}
                                selected={this.state.path === item.path}
                                onClick={(event) => this.handleListItemClick(item.path)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
                <div className={classes.page}>
                    <Switch>
                        <Route path='/create' component={Create} />
                        <Route path='/' component={Note} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles) (Layout)
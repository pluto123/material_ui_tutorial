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
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'

const drawerWith = 240

const useStyles = (theme) => ({
    page: {
        background: '#F9F9F9',
        width: '100%',
        padding: theme.spacing(3)
    },
    drawer: {
        width: drawerWith
    },
    drawerPaper: {
        width: drawerWith
    },
    root: {
        display: 'flex'
    },
    title: {
        padding: theme.spacing(2)
    },
    appbar: {
        width: `calc(100% - ${drawerWith}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
        flexGrow: 1
    },
    avatar: {
        marginLeft: theme.spacing(2)
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
                <AppBar 
                    className={classes.appbar}
                    elevation={0}
                >
                    <Toolbar>
                        <Typography className={classes.date}>
                            Today is the { format(new Date(), 'do MMMM Y') }
                        </Typography>
                        <Typography>
                            Steven
                        </Typography>
                        <Avatar src="/pluto.png" className={classes.avatar}/>
                    </Toolbar>
                </AppBar>
                {/* side drawer */}
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    anchor="left"
                    classes={{ paper: classes.drawerPaper}}
                >
                    <div>
                        <Typography variant="h5" className={classes.title}>
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
                    <div className={classes.toolbar}></div>
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
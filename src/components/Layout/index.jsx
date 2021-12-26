import { Drawer, Typography } from '@material-ui/core'
import { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch, Link } from 'react-router-dom'
import Create from '../../pages/Create'
import Note from '../../pages/Note'

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

class Layout extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
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
                </Drawer>
                <div className={classes.page}>
                    <Link to='/create'>Create</Link><br />
                    <Link to='/note'>Note</Link>
                    <Switch>
                        <Route path='/create' component={Create} />
                        <Route path='/note' component={Note} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles) (Layout)
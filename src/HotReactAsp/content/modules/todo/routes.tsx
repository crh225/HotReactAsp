import * as React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Tasks from './container/Tasks'
import TaskList from './presentation/TaskList'
import TaskEdit from './presentation/TaskEdit'

var Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Tasks}>
            <IndexRoute component={TaskList} />
            <Route path="/edit" component={TaskEdit} />
        </Route>
    </Router>
)

export default Routes
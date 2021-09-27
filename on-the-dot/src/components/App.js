import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';

// import Home from './Home';
import ActivitiesSearch from './ActivitiesSearch';
import Activities from './Activities';
import TasksSearch from './TasksSearch';
import Tasks from './Tasks';
// import Distance from './Distance';

import './App.css';

import activitiesData from './activitiesData';
import tasksData from './tasksData';

function PageNotFound (props) {
  return (
    <div>
      <h2>Sorry, the page you requested was not found.</h2>
      Go back to <Link to="/">the home page</Link>
    </div>
  )
}

function App() {

  const [ activities, setActivities ] = useState( activitiesData );
  const [ tasks, setTasks ] = useState( tasksData );

  return (

    <div className="App">
      <Router basename={ process.env.PUBLIC_URL }>
        <nav className="navbar">
          <div class="App-logo">on-the-dot...</div>
            <ul className="nav-link">
              <div className="menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/tasks">Tasks</Link></li>
              </div>
            </ul>

        </nav>

        <Switch>

          <Route exact path="/"/>
          <Route exact path="/activities" component={ ActivitiesSearch } />
          <Route exact path="/activities/search/:query" >
            <Activities
              activities={ activities }
              setActivities={ setActivities }
              tasks={ tasks }
            />
          </Route>

          <Route exact path="/tasks">
            <TasksSearch
              tasks={ tasks }
            />
          </Route>

          <Route exact path="/activities/search/:query/:dateId">
            <Tasks
              tasks={ tasks }
              setTasks={ setTasks }
            />
          </Route>

          <Route path="*" component={ PageNotFound } />

        </Switch>

      </Router>
    </div>
  );
}

export default App;


/*
// TODO:
&nbsp; | &nbsp;
<Link to="/distance">Distance</Link>
  </Route>
  <Route exact path="/distance" component={ Distance } />

*/

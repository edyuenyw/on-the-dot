import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';

import ActivitiesSearch from './ActivitiesSearch';
import Activities from './Activities';
import Tasks from './Tasks';
import Distance from './Distance';

import './App.css';

import activitiesData from './activitiesData';
import tasksData from './tasksData';

function App() {

  const [ activities, setActivities ] = useState( activitiesData );
  const [ tasks, setTasks ] = useState( tasksData );

  return (

    <div className="App">
      <Router basename={ process.env.PUBLIC_URL }>
        <nav>
          <Link to="/activities">Activities</Link>
          &nbsp; | &nbsp;
          <Link to="/tasks">Tasks</Link>
          &nbsp; | &nbsp;
          <Link to="/distance">Distance</Link>
        </nav>

        <Switch>
          <Route exact path="/" />

          <Route exact path="/activities" component={ ActivitiesSearch } />
          <Route exact path="/activities/search/:query" >
            <Activities
              activities={ activities }
              setActivities={ setActivities }
            />
          </Route>
          <Route exact path="/activities/search/:query/:dateId">
            <Tasks
              tasks={ tasks }
              setTasks={ setTasks }
            />
          </Route>


          { /*
            <Route exact path="/tasks" component={ Tasks } />
            <Route exact path="/activities/search/:query" >
            <Activities
            activitiesData={ activitiesData }
            />
            </Route>
            <Route exact path="/distance" component={ Distance } />
          */ }

        </Switch>

      </Router>
    </div>
  );
}

export default App;

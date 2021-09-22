import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react'; // splitting it for index image slider

import ActivitiesSearch from './ActivitiesSearch';
import Activities from './Activities';
import Tasks from './Tasks';
import Distance from './Distance';

import './App.css';

import activitiesData from './activitiesData';

function App() {

  // const tasksData = [
  //   {
  //     id: 1,
  //     name: "Coffee",
  //     duration: 5
  //   }
  // ];

  const [ activities, setActivities ] = useState( activitiesData );

  return (

    <div className="App">
      <Router>
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

          <Route exact path="/tasks" component={ Tasks } />
          
          { /*
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

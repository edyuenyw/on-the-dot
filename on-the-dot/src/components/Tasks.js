import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// need a list to show all Item being added here
// useEffect to calculate new items being added the the default leave/arrival time

function Tasks( props ) {

  const [ tasks, setTasks ] = useState( [] );

  const params = useParams(); // params:{query: "work", dateId: "2021-09-23"}

  useEffect( () => {
    console.log("Tasks.useEffect() is running: ", params);

    const taskResults = props.tasks.filter(
      task => task.date === params.dateId
    );

    setTasks( taskResults );
  }, [ params.dateId ] );

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log( "Tasks.handleSubmit() clicked" );

    const theData = {
      id: Date.now(),
      date: params.dateId,
      name: ev.target.taskName.value,
      duration: ev.target.duration.value
    }
    props.setTasks([ ...props.tasks, theData ]);
    setTasks([ ...tasks, theData ]);
    // props.history.push(`/task/${ id }`);

  };

  return(
    <div>
      <h1>Tasks</h1>
      <form onSubmit={ handleSubmit } >
        <input type="text" name="taskName" placeholder="Task" />
        &nbsp;
        <input type="text" name="duration" placeholder="Duration in mins" />
        <button>Submit</button>
      </form>
      <ul>
      {
        tasks.length > 0
        &&
        tasks.map( (task) =>
          <li key={ task.id } >
            <h3>
              Task ID: { task.id } &nbsp;
              Date: { task.date } &nbsp;
              Name: { task.name } &nbsp;
              Duration: { task.duration } minutes
            </h3>
          </li>
        )
      }
      </ul>

    </div>
  ) // return
}; // Tasks

export default Tasks;

/*



*/

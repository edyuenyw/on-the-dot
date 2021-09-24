import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Tasks( props ) {

  const [ tasks, setTasks ] = useState( [] );
  const params = useParams();

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
      activityName: params.query,
      date: params.dateId,
      name: ev.target.taskName.value,
      duration: parseInt(ev.target.duration.value)
    }
    props.setTasks([ ...props.tasks, theData ]);
    setTasks([ ...tasks, theData ]);

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
              Date: { task.date } &nbsp;
              Task: { task.name } &nbsp;
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

import { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// need a list to show all Item being added here

// useEffect to calculate new items being added the the default leave/arrival time

function Tasks( props ) {

  const [ tasks, setTasks ] = useState( [] );

  useEffect( () => {
    console.log("useEffect() is running: ", tasks);
    setTasks( tasks );
  }, [ tasks ] );

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Tasks.handleSubmit() clicked", ev.target);

    const id = Date.now();
    const theData = {
      id: id,
      name: ev.target.taskName.value,
      duration: ev.target.duration.value
    }
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
              Name: { task.name } &nbsp;
              Duration: { task.duration }
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

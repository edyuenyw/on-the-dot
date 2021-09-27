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

  const handleDelete = () => {
    console.log("Activities.handleDelete() clicked.");
  };

  return(
    <div>
    <div className="search-results">
      <label>
        { params.dateId }
        &nbsp;
        { params.query }
      </label>

      <form onSubmit={ handleSubmit } >
        <input type="text" name="taskName" placeholder="Task" />
        &nbsp;
        <input type="text" name="duration" placeholder="Duration in mins" />
        <button>New</button>
      </form>
      </div>

      <ul className="row">
      {
        tasks.length > 0
        &&
        tasks.map( (task) =>
          <li className="tasks-card" key={ task.id } >
            <div className="tasks-labels">
              <div className="tasks-title">
                { task.name }
              </div>

              <div className="txt-label">
                Duration: { task.duration } minutes
                <button onClick={ handleDelete }>-</button>
              </div>
            </div>
          </li>
        )
      }
      </ul>

    </div>
  ) // return
}; // Tasks

export default Tasks;

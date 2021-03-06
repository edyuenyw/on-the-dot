import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Tasks( props ) {

  const [ tasks, setTasks ] = useState( [] );
  const [ errors, setErrors ] = useState( {} );
  const [ errorExists, setErrorExists ] = useState( "" );

  const params = useParams();

  useEffect( () => {
    // console.log(props.tasks);
    // console.log(params);
    setTasks( [] );

    const taskResults = props.tasks.filter( task =>
      task.date === params.dateId && task.activityName.toLowerCase() === params.query.toLowerCase()
    );

    setTasks( taskResults );
  }, [ params.dateId ] );

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log( "Tasks.handleSubmit() clicked" );

    let errorFields = [];
    if ( ev.target.taskName.value.length <= 0 ){
      errorFields = [ ...errorFields, "Task"]
    }

    if ( ev.target.duration.value.length <= 0 ){
      errorFields = [ ...errorFields, "Duration"]
    }

    setErrors( errorFields );

    if ( errorFields.length > 0 ){
      setErrorExists( "Missing required fields" );
    } else {
      if ( ev.target.taskName.value.length > 0 && !isNaN( parseInt( ev.target.duration.value ) ) ) {
        // console.log("adding new tasks");
        const theData = {
          id: Date.now(),
          activityName: params.query,
          date: params.dateId,
          name: ev.target.taskName.value,
          duration: parseInt(ev.target.duration.value),
          deleted: false
        }
        setErrorExists( "" );
        props.setTasks([ ...props.tasks, theData ]);
        setTasks([ ...tasks, theData ]);
      }
    }

  };

  const handleDelete = ( taskId ) => {
    // array of the task selected
    // mutable
    props.tasks.map( task => {
        // console.log("task.id == taskId: ", task.id, ":", task.id === taskId);
        if ( task.id === taskId ){
          task.deleted = !task.deleted;
          task.duration = task.duration * -1;
        }
      } );

    setTasks( props.tasks.filter( task => task.date === params.dateId ) );

  };

  return(
    <div>
      <div className="tasks-results-invalid">
        {
          errorExists.length > 0
          &&
          <p>{ errorExists }:</p>
        }
        <ul>
        {
          errors.length > 0
          &&
            errors.map( (error, index ) =>
              <li key={ index }>{ error }</li>
            )
        }
        </ul>
      </div>

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
          ?
          tasks.map( (task) =>
            <li className="tasks-card" key={ task.id } >
              <div>
                <div className="tasks-title">
                  { task.name }
                </div>

                <div className="tasks-labels">
                  Duration: { task.duration } minutes
                  <button onClick={ () => handleDelete(task.id) }>{ task.deleted ? "+" : "-" }</button>
                </div>
              </div>
            </li>
          )
          :
          <p>Task list is empty for '{ params.query }'. Start adding it.</p>
        }
      </ul>

    </div>
  ) // return
}; // Tasks

export default Tasks;


// TODO: Task deletion. flag only and recalculate in Activities. Then do styling on deleted/flagged styling. Also change the button + -

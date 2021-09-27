import React, { useState, useEffect } from 'react';

function TasksSearch( props ){

  const [ searchText, setSearchText ] = useState( '' );
  const [ results, setResults ] = useState( {} );

  useEffect( () => {

    const searchTerm = searchText.toLowerCase();
    const results = props.tasks.filter(
      task => task.name.toLowerCase().includes( searchTerm )
    );

    setResults( results );
  }, [ searchText ] );

  const handleChange = (ev) => {
    setSearchText( ev.target.value );
  };

  return(
    <div className="tasks-search" >
      <h3>Tasks</h3>
      <input type="text" onChange={ handleChange } placeholder="Search tasks"/>

    <ul className="row">
      {
        results.length > 0
        &&
        results.map( ( task ) =>
        <li className="tasks-card" key={ task.id } >
          <div>
            <div className="txt-label">
            <label>
              { task.date }
            </label>
            <label>
              { task.activityName }
            </label>
            </div>

            <div className="tasks-title">
              { task.name }
            </div>
            <div className="txt-label">
              Duration: { task.duration } minutes
            </div>
          </div>
        </li>
        )
      }
    </ul>

    </div>
  ) // return
} // TasksSearch

export default TasksSearch;

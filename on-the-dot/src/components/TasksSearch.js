import React, { useState, useEffect } from 'react';

function TasksSearch( props ){

  const [ searchText, setSearchText ] = useState( '' );
  const [ results, setResults ] = useState( {} );
  // const history = useHistory();

  useEffect( () => {
    // console.log("TasksSearch.useEffect() is running: ");

    const searchTerm = searchText.toLowerCase();
    const results = props.tasks.filter(
      task => task.name.toLowerCase().includes( searchTerm )
    );

    setResults( results );
  }, [ searchText ] );

  const handleChange = (ev) => {
    // console.log("TasksSearch.handleChange() clicked.");
    // for noe display searchText target value
    setSearchText( ev.target.value );
  };

  return(
    <div>
      <h3>Tasks</h3>
      <input type="text" onChange={ handleChange } placeholder="Search tasks"/>

    <ul>
      {
        results.length > 0
        &&
        results.map( ( task ) =>
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
} // TasksSearch

export default TasksSearch;

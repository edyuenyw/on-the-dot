import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';


function ActivitiesSearch( props ){

  const [ searchText, setSearchText ] = useState( '' );
  const history = useHistory();

  const handleSubmit = (ev) => {
    // console.log("ActivitiesSearch.handleSubmit() clicked: ", searchText);
    ev.preventDefault();
    history.push(`activities/search/${ searchText }`);
  };

  const handleChange = (ev) => {
    // console.log("ActivitiesSearch.handleChange() clicked.");
    setSearchText( ev.target.value );
  };

  return(
    <div className="activities-search">
      <h3>Activities</h3>
      <form onSubmit={ handleSubmit } >
        <input type="text" onChange={ handleChange } placeholder="Search activities"/>
        <button>Search</button>
      </form>
    </div>
  ) // return
} // ActivitiesSearch

export default ActivitiesSearch;

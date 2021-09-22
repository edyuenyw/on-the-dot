import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import activitiesData from './activitiesData';

const google = window.google;


function Activities( props ) {

  const [ activities, setActivities ] = useState( [] );

   const history = useHistory();
   const params = useParams();

  function performSearch( searchText ) {
    console.log("performSearch: ", props.activities);
    const searchTerm = searchText.toLowerCase();
    const searchResults = props.activities.filter(
      activity => activity.activityName.toLowerCase().includes(searchTerm)
    );

    setActivities( searchResults );
  };

  useEffect( () => {
    console.log("Activities.useEffect() is running: ", props);


    performSearch( params.query );

  }, [ params.query ] );


  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Activities.handleSubmit() clicked.");

    if ( activities.find( d => d.dateId === ev.target.dateId.value) ){
      return;
    }
      const service = new google.maps.DistanceMatrixService();

      service.getDistanceMatrix(
        {
          origins: [ ev.target.addressFrom.value ],
          destinations: [ ev.target.addressTo.value ],
          region: "AU",
          travelMode: google.maps.TravelMode.DRIVING
        },
        function( response, status ){
          if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
          } else {
            console.log( response );
            // console.log( response.rows[0].elements[0].duration );
            // setDuration( Math.round(response.rows[0].elements[0].duration.value/60) );

            const theData = {
              dateId: ev.target.dateId.value,
              activityName: ev.target.activityName.value,
              addressFrom: response.originAddresses[0].split(',')[0],
              addressTo: response.destinationAddresses[0].split(',')[0],
              arriveBy: ev.target.arriveBy.value,
              departBy: parseInt(ev.target.arriveBy.value) - Math.round( response.rows[0].elements[0].duration.value / 60 )
            };

            props.setActivities([ ...props.activities, theData ]);
            setActivities([ ...activities, theData ]);
          }
        }
      )
  };

  const minDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    dd = dd<10 ? '0'+dd : dd;
    mm = mm<10 ? '0'+mm : mm;

    return today = yyyy + '-' + mm + '-' + dd;
  };

  return(
    <div>
      <h1>Activities</h1>
      <form onSubmit={ handleSubmit } >
        <input type="date" name="dateId" min={ minDate() } defaultValue={ minDate() } />&nbsp;
        <input type="text" name="activityName" placeholder="Activity" />&nbsp;
        <input type="text" name="addressFrom" placeholder="Address From" />&nbsp;
        <input type="text" name="addressTo" placeholder="Address To" />&nbsp;
        <input type="text" name="arriveBy" placeholder="Arrive By (hhmm)" />&nbsp;
      <button>Submit</button>
      </form>
      <ul>
      {
        activities.length > 0
        &&
        activities.map( (activity) =>
          <li key={ activity.dateId } >
            <h3>
            Date: { activity.dateId }
            <br />
            Activity: { activity.activityName }
            <br />
            Depart: { activity.addressFrom } by: { activity.departBy.toString().length < 4 ? "0" + activity.departBy : activity.departBy }
            <br />
            Arrive: { activity.addressTo } by: { activity.arriveBy }
            </h3>
          </li>
        )
      }
      </ul>

    </div>
  ) // return
}; // Activities

export default Activities;

/*

{
  dateId: "2021-09-20",
  activityName: "Work",
  address: {            // get from google map
    addressFrom: "Home",
    addressTo: "Melbourne"
  },
  date: "18/09/2021",
  arriveBy: 900,
  departBy: 800
}

epoch time
1631887200
1631973600
const myDate = new Date("September 18, 2021 00:00:00");
myDate.getTime()/1000.0;  -- 1631887200

1 day = 24 hours = 1440 minutes = 84600 seconds
<input type="text" name="departBy" placeholder="Depart By" disabled />&nbsp;

*/

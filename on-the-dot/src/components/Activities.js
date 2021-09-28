import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const google = window.google;

function Activities( props ) {

  const [ activities, setActivities ] = useState( [] );
  const params = useParams();

  function performSearch( searchText ) {
    // console.log("performSearch: ", props.activities);
    const searchTerm = searchText.toLowerCase();

    const searchResults = () => {
      const activity = props.activities.filter( a => a.activityName.toLowerCase().includes(searchTerm) );
      if ( activity.length > 0 ){
        // console.log("activity: ", activity);

        // Sum tasks durations per activity
        activity.map( obj => {
          // console.log("props.tasks.filter( t => t.date === obj.dateId ): ", props.tasks.filter( t => t.date === obj.dateId ));
          const tasksDates = props.tasks.filter( t => t.date === obj.dateId && t.activityName.toLowerCase() === searchTerm );

          if ( tasksDates.length > 0 ){
            console.log("tasksDates: ", tasksDates);
            const calculateMinutes = tasksDates.reduce( (prev, curr) => prev + curr.duration, 0 ); // need to do something here
            const durationMinutes = calculateMinutes < 0 ? 0 : calculateMinutes;
            console.log("durationMinutes: ", durationMinutes, " and activity.duration: ", ( Math.round( obj.duration / 60 ) ) );

            const toMinutes = ( Number( obj.arriveBy.split(':')[0] ) * 60 ) +
              Number( obj.arriveBy.split(':')[1] ) -
              ( Math.round( obj.duration / 60 ) ) - durationMinutes ;

            const hour = Math.floor( toMinutes / 60 );
            const minutes = toMinutes % 60 < 10 ? `0${toMinutes % 60}` : toMinutes % 60;
            obj.departBy = `${hour}:${minutes}`;
          }
        });
      }
      return activity;
    }

    setActivities( searchResults );
  };

  useEffect( () => {
    // console.log("Activities.useEffect() is running: ", props);
    performSearch( params.query );
  }, [ params.query ] );


  const handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log("Activities.handleSubmit() clicked.");
    // console.log("input arrive time: ", ev.target.arriveBy.value);

    if ( props.activities.find( d => d.dateId === ev.target.dateId.value &&
        d.activityName.toLowerCase() === ev.target.activityName.value.toLowerCase() ) ){
      alert("same activity found");
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

            const toMinutes = (Number(ev.target.arriveBy.value.split(':')[0]) * 60) +
                              Number(ev.target.arriveBy.value.split(':')[1]) -
                              Math.round( response.rows[0].elements[0].duration.value / 60 );
            const hour = Math.floor( toMinutes / 60 );
            const minutes = toMinutes % 60;

            const theData = {
              dateId: ev.target.dateId.value,
              activityName: ev.target.activityName.value,
              addressFrom: response.originAddresses[0].split(',')[0],
              addressTo: response.destinationAddresses[0].split(',')[0],
              arriveBy: ev.target.arriveBy.value,
              departBy: `${hour}:${minutes}`,
              duration: response.rows[0].elements[0].duration.value
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
      <div className="search-results">
        <form onSubmit={ handleSubmit } >
          <input type="date" name="dateId" min={ minDate() } defaultValue={ minDate() } />
          <input type="time" name="arriveBy" placeholder="Arrive By (hhmm)" />
          <input type="text" name="activityName" placeholder="Activity" />
          <input type="text" name="addressFrom" placeholder="Address From" />
          <input type="text" name="addressTo" placeholder="Address To" />
          <button>New</button>
        </form>
      </div>

          <ul className="row">
          {
            activities.length > 0
            &&
            activities.map( (activity, index) =>
            <div className="column">

              <Link to={`/activities/search/${ activity.activityName.toLowerCase() }/${ activity.dateId }`} >
                <li className="activities-card" key={ activity.dateId } >
                  <label className="txt-label">
                    { activity.dateId }
                  </label>

                  <label className="txt-label-title">
                    { activity.activityName }
                  </label>

                  <div className="txt-label">
                    <label>
                      Depart: { activity.departBy }
                    </label>
                    <label>
                      Arrive: { activity.arriveBy }
                    </label>
                  </div>
                </li>
              </Link>

            </div>
            )
          }
          </ul>


    </div>
  ) // return
}; // Activities

export default Activities;

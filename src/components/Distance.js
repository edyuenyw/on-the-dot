import { useState, useEffect } from 'react';

const google = window.google;

function Distance (){

  const [ duration, setDuration ] = useState( 0 );

  useEffect (() => {
    console.log("Distance.useEffect() running.");

    const googleScript = document.getElementById("google-map-script");

    if ( google ) {

    }

    googleScript.addEventListener( "load", () => {

    })

  }, [ duration ]);

  function getDuration( origin, destination ){
    console.log("getDuration(): ", origin, " : ", destination);

    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [ origin ],
        destinations: [ destination ],
        region: "AU",
        travelMode: google.maps.TravelMode.DRIVING
      },
      function( response, status ){
        if (status !== google.maps.DistanceMatrixStatus.OK) {
          alert('Error was: ' + status);
        } else {
          console.log( response );
          console.log( response.rows[0].elements[0].duration );
          setDuration( Math.round(response.rows[0].elements[0].duration.value/60) );
        }
      }
    )
  }

  const handleSubmit = (ev) => {
    console.log("Distance.handleSubmit() clicked.");
    ev.preventDefault();

    const origin = ev.target.origin.value; //.replaceAll(" ", "%20");
    const destination = ev.target.destination.value; //.replaceAll(" ", "%20");
    // need functino to call google api
    getDuration( origin, destination );
  };


  return(
    <div>
      <h3>
        Distance calculator. Melbourne Driving Mode Assumed.
      </h3>
      <form onSubmit={ handleSubmit } >
        Origin: <input type="text" name="origin" />
        &nbsp;
        Destination: <input type="text" name="destination" />
        &nbsp;
        <button>Calculate</button>
      </form>

      <h3>{ duration } minutes</h3>

    </div>
  );  // return
};  // Distance

export default Distance;


/*

Form to input address from and to
Form to do search from google map api
so requires:
1.  api key
2.  endpoint
3.  results json return
4.  cache
AIzaSyBCZjnRv_Kdl4ze7G0XZeM54P2hPZBSQKU

https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=YOUR_API_KEY
https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters

either
https://developers.google.com/maps/documentation/distance-matrix/overview#arrival_time
or
https://developers.google.com/maps/documentation/distance-matrix/overview#departure_time

datetime format 9999-12-31T23:59:59.999999999Z


https://developers.google.com/maps/documentation/distance-matrix/overview#region

https://developers.google.com/maps/documentation/distance-matrix/overview#units

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101%2C-73.89188969999998&destinations=40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

+ use %2
<space> use %20

https://www.google.com/maps/dir/
4+Bribie+Way+Point+Cook+VIC+3030,+Australia/
17+Felstead+Dr,+Truganina+VIC+3029,+Australia/
@-37.8670044,144.7079822,13z/
data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6ad687d3270a0563:0x41de8bc8ab71c7ca!2m2!1d144.7420525!2d-37.911966!1m5!1m1!1s0x6ad68b12be1870e7:0x7aea525d497d8a60!2m2!1d144.7588062!2d-37.8229723!3e0

https://maps.googleapis.com/maps/api/distancematrix/json?
key=AIzaSyBCZjnRv_Kdl4ze7G0XZeM54P2hPZBSQKU
&region=AU
&origins=melbourne%20airport
&destinations=17%20Felstead%20Drive

=== NOT WORKING DUE TO CORS ISSUE ===

const GOOGLE_API_KEY = "AIzaSyBCZjnRv_Kdl4ze7G0XZeM54P2hPZBSQKU";
const GOOGLE_MAP_DISTANCE_BASE_URL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
const REGION = `&region=AU`
const ORIGINS = `&origins=`
const DESTINATIONS = `&destinations=`;

const DISTANCE_SEARCH_URL = `${GOOGLE_MAP_DISTANCE_BASE_URL}key=${GOOGLE_API_KEY}`;
return fetch( DISTANCE_SEARCH_URL + REGION + ORIGINS + origin + DESTINATIONS + destination )
  .then( response => response.json() )
  .then( data => data )
  .catch( error => console.log("Error fetching: ", error));

=== not required atm ===
&arrival_time=2021-09-21T16:00:00

{
destination_addresses: [
"17 Felstead Dr, Truganina VIC 3029, Australia"
],
origin_addresses: [
"4 Bribie Way, Point Cook VIC 3030, Australia"
],
rows: [
{
elements: [
{
distance: {
text: "12.7 km",
value: 12711
},
duration: {
text: "20 mins",
value: 1184
},
status: "OK"
}
]
}
],
status: "OK"
}


Access to fetch at 'http://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyBCZjnRv_Kdl4ze7G0XZeM54P2hPZBSQKU&region=AU&origins=4%20bribie%20way&destinations=17%20felstead%20drive' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


using axios
axios.get('https://api.giphy.com/v1/gifs/search', {
  params: {
    q: decodeURI(window.location.href.split('/').pop())  ||  'funny+cat',
    api_key: 'dc6zaTOxFJmzC'
  }
})

hooks to append document.body.appendChild()
https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

*/

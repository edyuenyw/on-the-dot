const google = window.google;

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
        console.log( "getDuration: ", response );
        // console.log( response.rows[0].elements[0].duration );
        // return ( Math.round( response.rows[0].elements[0].duration.value / 60 ) );
        return response;
      }
    }
  )
}

export { getDuration };

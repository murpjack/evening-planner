import React, { useContext } from 'react';
import { AppContext } from "../store";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import data from '../data/data.json';
const API_KEY = "AIzaSyDj5_qv0AXzRLKioLpJbPRAmB0_hXWNc_c";

export const MapContainer = () => {
  const { state } = useContext(AppContext);
  const { selectedOptionIndex, options } = state;
  const { foodDrink, fun, id } = options[selectedOptionIndex];

  const foodDrinkMarker = addCoordinatesToMap(foodDrink);
  const funMarker = addCoordinatesToMap(fun);

  const [lat, lng] = data[0].foodDrink[0].coords;

  return (
      <Map
        google={google}
        zoom={13}
        initialCenter={{ lat, lng }}
        mapTypeControl={false}
        zoomControl={false}
      >
        {foodDrinkMarker}
        {funMarker}
      </ Map>
  )
};
// width={"100%"}
// size: { "700px" }

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer);

function addCoordinatesToMap(venue: any) {
  const coords = venue.coords;
  const imageDetails = {
    url: getMarkerIcon(venue.Theme),
    anchor: new google.maps.Point(32, 32),
    scaledSize: new google.maps.Size(64, 64)
  };

  return (<Marker
    title={venue.VenueName}
    name={venue.VenueName}
    key={venue.id}
    Icon={imageDetails}
    position={{ lat: coords[0], lng: coords[1] }}
  />)
}

function getMarkerIcon(theme: number) {
  switch (theme) {
    case 0:
      return "../images/local_dining.svg";
    case 1:
      return "../images/local_activity.svg";
  }
}

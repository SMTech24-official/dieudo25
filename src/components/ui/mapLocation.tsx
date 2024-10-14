import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.730610, // Default latitude
  lng: -73.935242, // Default longitude
};

type Props = {
  onChange: (address: string) => void;
};

const MapLocation: React.FC<Props> = ({ onChange }) => {
  const [selectedLocation, setSelectedLocation] = useState<google.maps.LatLngLiteral | null>(null);

  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (place.geometry && place.geometry.location) {
      const address = place.formatted_address || '';
      setSelectedLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      onChange(address); // Passing the address back to the parent component
    }
  };

  // Ensure the API key is defined, or provide a fallback
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  if (!googleMapsApiKey) {
    return <div className="text-red-500">Google Maps API key is missing</div>;
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <Autocomplete
        apiKey={googleMapsApiKey}
        onPlaceSelected={handlePlaceSelect}
        types={['address']}
        componentRestrictions={{ country: "us" }}
      >
        <input
          type="text"
          placeholder="Enter address"
          className="w-full p-2 border rounded"
        />
      </Autocomplete>
      {selectedLocation && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selectedLocation || center}
          zoom={15}
        >
          <Marker position={selectedLocation || center} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapLocation;

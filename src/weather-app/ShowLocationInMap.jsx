import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import "./style.css";

//generated here - https://cloud.google.com/docs/authentication/api-keys#create
const API_KEY = "AIzaSyCsK5LDBo_1szTO2thmutBLGdG_N5KEnvg";

export default function ShowLocationInMap({ data }) {
  const center = {
    lat: data.location.lat,
    lng: data.location.lon,
  };
  console.log(center);

  return (
    <div className="google-maps-background">
      <APIProvider
        apiKey={API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          center={center}
          defaultZoom={10}
          options={{
            zoomControl: true, // Enables zoom controls
            mapTypeControl: false, // Disables map type control
            streetViewControl: false, // Disables street view control
          }}
          mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker position={center} label={data.location.name} />
        </Map>
      </APIProvider>
    </div>
  );
}

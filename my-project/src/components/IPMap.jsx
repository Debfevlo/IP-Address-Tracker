import { useContext } from "react";
import { IPContext } from "../context/IpContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons for Vite
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

function IPMap() {
  const { ipData, loading, error } = useContext(IPContext);

  if (loading) return <p>Loading map...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!ipData || !ipData.location) return <p>No data available</p>;

  const { location } = ipData;
  const latitude = (location.lat);
  const longitude = (location.lng);
  const city = location.city;
  const country_name = location.country;

  console.log(ipData)

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-96"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[latitude, longitude]}>
        <Popup className="w-52">
          {city}, {country_name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default IPMap;

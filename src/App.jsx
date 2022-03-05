import { useEffect, useRef } from "react";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

// these are the CSS styles needed for arcgis
import "@arcgis/core/assets/esri/themes/dark/main.css";

// these are our custom styles
import "./App.css";

function App() {
  // this is a reference to the element that contains the map view
  const mapViewElement = useRef(null);

  // this is the initialized map instance
  const webMap = new WebMap({
    portalItem: {
      id: "99fff0f927b74e4cb3d190e169ff1868",
    },
  });

  // this function runs after React has rendered the map view element
  useEffect(() => {
    // initialize a MapView inside the map view element...
    const mapView = new MapView({
      container: mapViewElement.current,
      map: webMap,
    });

    mapView.when(() => {
      console.log("Map loaded successfully");
    });
  }, []);

  return <div className="map-view" ref={mapViewElement}></div>;
}

export default App;

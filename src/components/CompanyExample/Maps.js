import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

class Map extends React.Component {

  constructor(props) {
    console.log('je suis dans le constructor de Map', props.latitude);
    console.log(props.markersData[0].latLng[0]);
 
    super(props)
   
}
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [this.props.markersData[0].latLng[0], this.props.markersData[0].latLng[1]],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);
    
  }
  componentDidUpdate({ markersData }) {

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);
    // check if data has changed
    if (this.props.markersData !== markersData) {
      this.updateMarkers(this.props.markersData);
    }
  }
  updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).addTo(this.layer);
    });
  }
 
  render() {
      return <div id="map" style={style} />;
  }
}

export default Map;
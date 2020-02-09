import { IMappable } from './IMappable';

export class Map {
  private googleMap: google.maps.Map;
  private options = {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    },
  };
  constructor(mapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDiv), this.options);
  }

  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}
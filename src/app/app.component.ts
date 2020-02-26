import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{

  map: mapboxgl.Map
  coordinates: any
  lng: number = -74.0700526
  lat: number = 4.6489681
  places: any = [
    { icon: 'local_florist', plan: 'bought', closeness: 1, distance: 1, active: true, name: 'Floreria la Gardenia' },
    { icon: 'donut_small', plan: 'free', closeness: 1, distance: 3, active: true, name: 'Donas la Delicia' },
    { icon: 'pets', plan: 'bought', closeness: 2, distance: 10, active: false, name: 'Veterinaria Huellitas' },
    { icon: 'restaurant', plan: 'bought', closeness: 2, distance: 20, active: true, name: 'SushiRoll' },
    { icon: 'home', plan: 'free', closeness: 3, distance: 80, active: true, name: 'Hotel el Descanso' },
    { icon: 'shopping_cart', plan: 'bought', closeness: 3, distance: 100, active: false, name: 'Zapateria el Clavo' }
  ]

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapboxKey
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: 10
    })
    this.createMarker(this.lng, this.lat)
  }

  createMarker(lng: number, lat: number): void {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.map)

    marker.on('drag', () => {
      this.coordinates = marker.getLngLat()
    })
  }

}

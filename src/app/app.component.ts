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
    { active: true, name: 'Floreria la Gardenia' },
    { active: true, name: 'Donas la Delicia' },
    { active: false, name: 'Veterinaria Huellitas' },
    { active: true, name: 'SushiRoll' },
    { active: true, name: 'Hotel el Descanso' },
    { active: false, name: 'Zapateria el Clavo' }
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

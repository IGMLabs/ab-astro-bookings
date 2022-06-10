import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css'],
})
export class TripPage implements OnInit {
  public tripId = '';
  public trip?: Trip;
  constructor(private route: ActivatedRoute, private tripsApi: TripsApi) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('id') || '';
    this.tripsApi.getById(this.tripId).subscribe((trip) => (this.trip = trip));
  }
}

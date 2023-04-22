import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel Johannesburg';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomId: 1,
      roomType: 'Single',
      amenities: 'TV, Aircon, Wifi',
      price: 100,
      photos: 'https://pix10.agoda.net/hotelImages/79114/-1/e98e5ebcfc0bbb7175ad4d3c9c4aa71e.jpg?ca=19&ce=1&s=1024x768',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    },
    {
      roomId: 2,
      roomType: 'Double',
      amenities: 'TV, Aircon, Wifi',
      price: 200,
      photos: 'https://hiltonsandton.hotels-johannesburg.com/data/Photos/OriginalPhoto/12783/1278399/1278399076/johannesburg-hilton-sandton-hotel-photo-2.JPEG',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    },
    {
      roomId: 3,
      roomType: 'Family',
      amenities: 'TV, Aircon, Wifi',
      price: 300,
      photos: 'https://hilton-sandton-hotel-johannesburg.booked.net/data/Photos/OriginalPhoto/12784/1278401/1278401350/Hilton-Sandton-Hotel-Johannesburg-Exterior.JPEG',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

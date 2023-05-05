import { Inject, Injectable } from '@angular/core';
import { RoomList } from './rooms';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
// providedIn root means that the service is available to the entire application
// i.e. registered in app.module.ts
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomId: 1,
      roomType: 'Single',
      amenities: 'TV, Aircon, Wifi',
      price: 100,
      photos:
        'https://pix10.agoda.net/hotelImages/79114/-1/e98e5ebcfc0bbb7175ad4d3c9c4aa71e.jpg?ca=19&ce=1&s=1024x768',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 4.5,
    },
    {
      roomId: 2,
      roomType: 'Double',
      amenities: 'TV, Aircon, Wifi',
      price: 200,
      photos:
        'https://hiltonsandton.hotels-johannesburg.com/data/Photos/OriginalPhoto/12783/1278399/1278399076/johannesburg-hilton-sandton-hotel-photo-2.JPEG',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 3.4123121,
    },
    {
      roomId: 3,
      roomType: 'Family',
      amenities: 'TV, Aircon, Wifi',
      price: 300,
      photos:
        'https://hilton-sandton-hotel-johannesburg.booked.net/data/Photos/OriginalPhoto/12784/1278401/1278401350/Hilton-Sandton-Hotel-Johannesburg-Exterior.JPEG',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 2.6231231,
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms service is initialized');
  }

  getRooms() {
    return this.roomList;
  }
}

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel Johannesburg';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  // Constructor is not for logic only for dependency injection
  // In summary, @ViewChild(HeaderComponent, {static: true}) is used when you need to access a child
  // component in the ngOnInit() lifecycle hook of the parent component,
  // and it ensures that the child component is available at that time.
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  
  // @SkipSelf() decorator is used in the constructor of a class to indicate
  // that the dependency being injected should be searched for starting from the parent injector, rather than the current injector.
  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = 'last title';
  }

  // ngDoCheck is a lifecycle hook that gets called after every change detection cycle, very costly
  // might be needed if you want to detect changes for something that is does not fall into any other lifecycle hook
  // try to avoid ngDoCheck as much as possible
  // Don't implement ngDoCheck and ngOnChanges on same component
  ngDoCheck(): void {
    console.log('On changes is called');
  }

  // ngOnInit is a lifecycle hook that gets called after the constructor
  // Use ngOnInit after the component is initialized
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomId: 4,
      roomType: 'Deluxe',
      amenities: 'TV, Aircon, Wifi',
      price: 400,
      photos:
        'https://pix10.agoda.net/hotelImages/79114/-1/e98e5ebcfc0bbb7175ad4d3c9c4aa71e.jpg?ca=19&ce=1&s=1024x768',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 4.5,
    };
    // In contrast to the push method, the spread operator does not mutate
    // the original array.Instead, it creates a new array instance, which
    // is assigned back to the roomList property.This means that the roomList
    // property is effectively replaced with a new array that contains the
    // original elements plus the new room object.
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}

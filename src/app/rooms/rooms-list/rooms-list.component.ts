import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection onPush Improves performance by only updating the component that has changed i.e. replaced not simply edited
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
// Can only use ngOnChanges if you have an input property
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  // Will be called when the input property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    // Following line will give the data back to the parent component
    this.selectedRoom.emit(room);
  }

    ngOnDestroy(): void {
    console.log('On destroy is called');
  }
}

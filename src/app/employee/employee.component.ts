import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // add providers for serivice if you want to use it in the component as a different instance instead
  // providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'Rick';

  // By using self decorator we are saying that this particular service should be available at this point
  // if not then throw an error
  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

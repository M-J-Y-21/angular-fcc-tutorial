import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  // Optional decorator is used to say that if the service is not available then don't throw an error
  constructor(@Optional() private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel Johannesburg';
  }
  // // Gives ref to user tag
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // // Template is loaded dynamically from typescript file
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

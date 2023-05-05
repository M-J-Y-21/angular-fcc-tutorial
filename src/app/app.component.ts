import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { localStorageToken } from './localstorage.token';
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
  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any) { 
    
  }

  ngOnInit(): void {
    this.loggerService.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel Johannesburg';

    this.localStorage.setItem('name', 'Hilton Hotel Johannesburg');
  }
  // // Gives ref to user tag
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // // Template is loaded dynamically from typescript file
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

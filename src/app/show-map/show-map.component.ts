import { Component, OnInit, NgModule } from '@angular/core';
import { DateTimePickerModule } from '@progress/kendo-angular-dateinputs';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapService } from '../services/maps.service';

// @NgModule({
//   bootstrap: [AppComponent],
//   imports: [BrowserModule, BrowserAnimationsModule, DateTimePickerModule]
// })
@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.css']
})
export class ShowMapComponent implements OnInit {
  // public value: Date = new Date(2020, 5, 1, 22);
  public format: string = 'dd/MM/yyyy HH:mm';

  public fromDate: Date = new Date(2020, 5, 1, 22);
  public toDate: Date = new Date(2020, 6, 1, 22);


  constructor(public mapService:MapService) { }

  ngOnInit() {
  }

  getData(){
    console.log("GET DATA");

    console.log(this.fromDate);
    console.log(this.toDate);

    let data  = {
      startdate : this.fromDate,
      enddate : this.toDate
    }

    this.mapService.searchService.emit(data);

  }

  plotTracks(){
    console.log("plotTracks");
    this.mapService.plotTracksService.emit();
  }


  
}

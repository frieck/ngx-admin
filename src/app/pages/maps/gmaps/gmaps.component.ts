import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'ngx-gmaps',
    styleUrls: ['./gmaps.component.scss'],
    templateUrl: './gmaps.component.html',
    imports: [NbCardModule, GoogleMap, MapMarker]
})
export class GmapsComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };
}

import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';
import { NbCardModule } from '@nebular/theme';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';

@Component({
    selector: 'ngx-search-map',
    templateUrl: './search-map.component.html',
    imports: [NbCardModule, SearchComponent, MapComponent]
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}

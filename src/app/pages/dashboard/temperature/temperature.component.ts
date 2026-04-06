import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbCardModule, NbTabsetModule, NbRadioModule } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TemperatureDraggerComponent } from './temperature-dragger/temperature-dragger.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoundPipe } from '../../../@theme/pipes/round.pipe';

@Component({
    selector: 'ngx-temperature',
    styleUrls: ['./temperature.component.scss'],
    templateUrl: './temperature.component.html',
    imports: [NbCardModule, NbTabsetModule, TemperatureDraggerComponent, NgClass, NbRadioModule, FormsModule, RoundPipe]
})
export class TemperatureComponent implements OnDestroy {
  private themeService = inject(NbThemeService);
  private temperatureHumidityService = inject(TemperatureHumidityData);


  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.theme = config.variables.temperature;
    });

    forkJoin(
      this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),
    )
      .subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
        this.temperatureData = temperatureData;
        this.temperature = this.temperatureData.value;

        this.humidityData = humidityData;
        this.humidity = this.humidityData.value;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { StatusCardComponent } from './status-card/status-card.component';
import { NgClass } from '@angular/common';
import { TemperatureComponent } from './temperature/temperature.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SolarComponent } from './solar/solar.component';
import { KittenComponent } from './kitten/kitten.component';
import { TrafficComponent } from './traffic/traffic.component';
import { WeatherComponent } from './weather/weather.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
    imports: [StatusCardComponent, NgClass, TemperatureComponent, ElectricityComponent, RoomsComponent, ContactsComponent, SolarComponent, KittenComponent, TrafficComponent, WeatherComponent, SecurityCamerasComponent]
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartjsBarComponent } from './chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs-line.component';
import { ChartjsMultipleXaxisComponent } from './chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs-radar.component';

@Component({
    selector: 'ngx-chartjs',
    styleUrls: ['./chartjs.component.scss'],
    templateUrl: './chartjs.component.html',
    imports: [NbCardModule, ChartjsPieComponent, ChartjsBarComponent, ChartjsLineComponent, ChartjsMultipleXaxisComponent, ChartjsBarHorizontalComponent, ChartjsRadarComponent]
})
export class ChartjsComponent {}

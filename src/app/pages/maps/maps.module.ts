import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import * as echarts from 'echarts/core';

@NgModule({
    imports: [
        ThemeModule,
        GoogleMapsModule,
        LeafletModule,
        MapsRoutingModule,
        NgxEchartsModule.forRoot({ echarts }),
        NbCardModule,
        ...routedComponents,
    ],
    exports: [],
})
export class MapsModule { }

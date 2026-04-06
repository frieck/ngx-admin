/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  private analytics = inject(AnalyticsService);
  private seoService = inject(SeoService);


  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
